"use client";
import { createContext } from "react";

export const PollContext = createContext({});

export function PollContextProvider({ children }: { children: React.ReactNode }) {
  return (
    <PollContext.Provider value={{}}>
      {children}
    </PollContext.Provider>
  )
}
