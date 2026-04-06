"use client";

import { forwardRef } from "react";
import type { OutputLine } from "@/lib/types";
import WelcomeBlock from "./WelcomeBlock";

interface Props {
  lines: OutputLine[];
  showWelcome: boolean;
  children?: React.ReactNode;
}

const TerminalOutput = forwardRef<HTMLDivElement, Props>(
  ({ lines, showWelcome, children }, ref) => {
    return (
      <div
        ref={ref}
        className="flex-1 overflow-y-auto px-7 pt-[22px] pb-2.5 max-md:px-3.5 max-md:pt-3.5 max-md:pb-2"
      >
        {showWelcome && <WelcomeBlock />}
        {lines.map((line) => (
          <span
            key={line.id}
            className={line.className}
            dangerouslySetInnerHTML={{ __html: line.html }}
          />
        ))}
        {children}
      </div>
    );
  },
);

TerminalOutput.displayName = "TerminalOutput";

export default TerminalOutput;
