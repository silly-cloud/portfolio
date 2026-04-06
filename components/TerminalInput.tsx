"use client";

import { forwardRef } from "react";

interface Props {
  value: string;
  hint: string;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TerminalInput = forwardRef<HTMLInputElement, Props>(
  ({ value, hint, onKeyDown, onChange }, ref) => {
    return (
      <div className="flex items-center pt-1 pb-1">
        <span className="text-term-green font-bold mr-1.5">&gt;</span>
        <span className="text-term-green font-bold">silly-cloud</span>
        <span className="text-term-purple mx-2">λ</span>
        <input
          ref={ref}
          type="text"
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck={false}
          placeholder="type a command..."
          aria-label="terminal input"
          className="flex-1 bg-transparent border-none outline-none text-term-white font-mono text-[13px] caret-term-green placeholder:text-term-dim placeholder:italic max-md:text-base"
        />
        <span className="text-term-muted text-[13px] pointer-events-none select-none opacity-40">
          {hint}
        </span>
      </div>
    );
  },
);

TerminalInput.displayName = "TerminalInput";

export default TerminalInput;
