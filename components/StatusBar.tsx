"use client";

import { useState, useEffect } from "react";
import { useTerminalContext } from "@/lib/TerminalContext";

function formatTime() {
  return new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}

export default function StatusBar() {
  const { entryCount } = useTerminalContext();
  const [clock, setClock] = useState("");

  useEffect(() => {
    setClock(formatTime());
    const interval = setInterval(() => setClock(formatTime()), 30_000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-between h-7 px-5 bg-term-navbg border-t border-term-border shrink-0 text-[11px] text-term-muted max-md:px-2.5">
      {/* Left: shortcuts */}
      <div className="flex items-center gap-3">
        <span>
          <kbd className="text-term-dim">Tab</kbd> autocomplete
        </span>
        <span>
          <kbd className="text-term-dim">↑↓</kbd> history
        </span>
        <span className="hidden md:inline">
          <kbd className="text-term-dim">Ctrl+L</kbd> clear
        </span>
      </div>

      {/* Right: entry count + clock */}
      <div className="flex items-center gap-3">
        <span>{entryCount} entries</span>
        <span className="text-term-dim">&middot;</span>
        <span>{clock}</span>
      </div>
    </div>
  );
}
