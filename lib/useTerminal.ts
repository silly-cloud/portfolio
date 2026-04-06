"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import type { OutputLine, CommandOutput } from "./types";
import { ALL_CMDS } from "./constants";
import { commands, URL_COMMANDS, esc } from "./commands";
import { useTerminalContext } from "./TerminalContext";

export function useTerminal() {
  const [lines, setLines] = useState<OutputLine[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [acHint, setAcHint] = useState("");

  const { entryCount, setEntryCount } = useTerminalContext();

  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);
  const cmdHistoryRef = useRef<string[]>([]);
  const histIdxRef = useRef(-1);
  const savedInputRef = useRef("");
  const renderQueueRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  // Auto-scroll on new lines
  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [lines]);

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      renderQueueRef.current.forEach(clearTimeout);
    };
  }, []);

  const addLine = useCallback((html: string, className: string = "") => {
    setLines((prev) => [
      ...prev,
      {
        id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        html,
        className: "ln" + (className ? " " + className : ""),
      },
    ]);
  }, []);

  const renderOutput = useCallback(
    (items: CommandOutput[], done?: () => void) => {
      let i = 0;
      function next() {
        if (i >= items.length) {
          if (done) done();
          return;
        }
        const { html = "", cls = "", delay = 0 } = items[i++];
        const timeout = setTimeout(() => {
          setLines((prev) => [
            ...prev,
            {
              id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
              html,
              className: "ln" + (cls ? " " + cls : ""),
            },
          ]);
          next();
        }, delay);
        renderQueueRef.current.push(timeout);
      }
      next();
    },
    [],
  );

  const clearTerminal = useCallback(() => {
    renderQueueRef.current.forEach(clearTimeout);
    renderQueueRef.current = [];
    setLines([]);
    setEntryCount(0);
  }, [setEntryCount]);

  const echoCmd = useCallback(
    (raw: string) => {
      setEntryCount((prev) => prev + 1);
      addLine(
        `<span class="cg" style="font-weight:700">&gt;</span> ` +
          `<span class="cg" style="font-weight:700">silly-cloud</span>` +
          `<span class="cp" style="margin:0 8px">λ</span>` +
          `<span class="cw">${esc(raw)}</span>`,
      );
    },
    [addLine, setEntryCount],
  );

  const run = useCallback(
    (raw: string) => {
      const trimmed = raw.trim();
      if (!trimmed) return;

      const history = cmdHistoryRef.current;
      if (history[history.length - 1] !== trimmed) {
        history.push(trimmed);
      }
      histIdxRef.current = history.length;

      echoCmd(trimmed);

      const lower = trimmed.toLowerCase();
      const parts = lower.split(/\s+/);
      const cmd = parts[0];

      // Easter egg: rm
      if (/^rm\s+-rf/.test(lower) || cmd === "rm") {
        renderOutput(
          [
            { html: "" },
            {
              html: '<span class="cr">  rm: cannot remove \'/\': Permission denied</span>',
            },
            {
              html: '<span class="cm">  Nice try. Read-only filesystem. 😏</span>',
            },
            { html: "" },
          ].map((l) => ({ ...l, delay: 16 })),
        );
        return;
      }

      // Easter egg: cat
      if (cmd === "cat") {
        renderOutput(
          [
            { html: "" },
            {
              html: `<span class="cr">  cat: ${esc(parts[1] || "")}: Permission denied</span>`,
            },
            {
              html: '<span class="cm">  tip: type the command name directly</span>',
            },
            { html: "" },
          ].map((l) => ({ ...l, delay: 16 })),
        );
        return;
      }

      // Clear is special — handled directly
      if (cmd === "clear") {
        clearTerminal();
        return;
      }

      // goto command — navigate to a page
      if (cmd === "goto") {
        const page = parts[1];
        const routes: Record<string, string> = {
          home: "/", exp: "/experience", experience: "/experience",
          proj: "/projects", projects: "/projects",
          blog: "/blog", blogs: "/blog",
          gallery: "/gallery", term: "/term", terminal: "/term",
        };
        if (page && routes[page]) {
          renderOutput(
            [
              { html: "" },
              { html: `<span class="cg">  → navigating to ${esc(page)} ...</span>` },
              { html: "" },
            ].map((l) => ({ ...l, delay: 16 })),
            () => { window.location.href = routes[page]; },
          );
        } else {
          renderOutput(
            [
              { html: "" },
              { html: '<span class="cr">  usage: goto &lt;page&gt;</span>' },
              { html: "" },
              { html: '<span class="cm">  available pages:</span>' },
              { html: '<span class="cw">    home · experience · projects · blog · gallery · terminal</span>' },
              { html: "" },
            ].map((l) => ({ ...l, delay: 16 })),
          );
        }
        return;
      }

      // Lookup command
      if (commands[cmd]) {
        const output = commands[cmd]();
        const url = URL_COMMANDS[cmd];
        if (url) {
          renderOutput(output, () => {
            window.open(url, "_blank", "noopener");
          });
        } else {
          renderOutput(output);
        }
      } else {
        renderOutput(
          [
            { html: "" },
            {
              html: `<span class="cw">  zsh: command not found: </span><span class="cr">${esc(trimmed)}</span>`,
            },
            {
              html: '<span class="cm">  type </span><span class="cg">help</span><span class="cm"> for available commands</span>',
            },
            { html: "" },
          ].map((l) => ({ ...l, delay: 14 })),
        );
      }
    },
    [echoCmd, renderOutput, clearTerminal],
  );

  const updateHint = useCallback((val: string) => {
    if (!val) {
      setAcHint("");
      return;
    }
    const match = ALL_CMDS.find(
      (c) => c.startsWith(val.toLowerCase()) && c !== val.toLowerCase(),
    );
    setAcHint(match ? match.slice(val.length) : "");
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        const v = inputValue;
        setInputValue("");
        setAcHint("");
        run(v);
        return;
      }

      if (e.key === "ArrowUp") {
        e.preventDefault();
        const history = cmdHistoryRef.current;
        if (!history.length) return;
        if (histIdxRef.current === history.length) {
          savedInputRef.current = inputValue;
        }
        histIdxRef.current = Math.max(0, histIdxRef.current - 1);
        setInputValue(history[histIdxRef.current]);
        setAcHint("");
        return;
      }

      if (e.key === "ArrowDown") {
        e.preventDefault();
        const history = cmdHistoryRef.current;
        if (histIdxRef.current >= history.length) return;
        histIdxRef.current++;
        setInputValue(
          histIdxRef.current === history.length
            ? savedInputRef.current
            : history[histIdxRef.current],
        );
        setAcHint("");
        return;
      }

      if (e.key === "Tab") {
        e.preventDefault();
        const match = ALL_CMDS.find(
          (c) =>
            c.startsWith(inputValue.toLowerCase()) &&
            c !== inputValue.toLowerCase(),
        );
        if (match) {
          setInputValue(match);
          setAcHint("");
        }
        return;
      }

      if (e.key === "l" && e.ctrlKey) {
        e.preventDefault();
        clearTerminal();
        return;
      }
    },
    [inputValue, run, clearTerminal],
  );

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value;
      setInputValue(val);
      updateHint(val);
    },
    [updateHint],
  );

  return {
    lines,
    inputValue,
    setInputValue,
    acHint,
    inputRef,
    outputRef,
    handleKeyDown,
    handleInputChange,
    entryCount,
  };
}
