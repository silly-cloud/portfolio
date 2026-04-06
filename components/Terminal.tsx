"use client";

import { useTerminal } from "@/lib/useTerminal";
import TerminalOutput from "./TerminalOutput";
import TerminalInput from "./TerminalInput";

interface Props {
  showWelcome?: boolean;
}

export default function Terminal({ showWelcome = true }: Props) {
  const {
    lines,
    inputValue,
    acHint,
    inputRef,
    outputRef,
    handleKeyDown,
    handleInputChange,
  } = useTerminal();

  return (
    <div
      className="flex-1 flex flex-col overflow-hidden relative cursor-text terminal-scanline"
      onClick={() => inputRef.current?.focus()}
    >
      <TerminalOutput
        ref={outputRef}
        lines={lines}
        showWelcome={showWelcome}
      >
        <TerminalInput
          ref={inputRef}
          value={inputValue}
          hint={acHint}
          onKeyDown={handleKeyDown}
          onChange={handleInputChange}
        />
      </TerminalOutput>
    </div>
  );
}
