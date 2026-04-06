"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

interface TerminalContextType {
  entryCount: number;
  setEntryCount: React.Dispatch<React.SetStateAction<number>>;
}

const TerminalContext = createContext<TerminalContextType>({
  entryCount: 0,
  setEntryCount: () => {},
});

export function TerminalProvider({ children }: { children: ReactNode }) {
  const [entryCount, setEntryCount] = useState(0);
  return (
    <TerminalContext.Provider value={{ entryCount, setEntryCount }}>
      {children}
    </TerminalContext.Provider>
  );
}

export function useTerminalContext() {
  return useContext(TerminalContext);
}
