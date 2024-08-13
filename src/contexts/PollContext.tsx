"use client";
import { createContext, useState } from "react";

interface Option {
  option: string
}

interface PollContextProps {
  options: Option[]
};

export const PollContext = createContext({} as PollContextProps);

export function PollContextProvider({ children }: { children: React.ReactNode }) {
  const [options, setOptions] = useState<Option[]>([]);

  return (
    <PollContext.Provider value={{ options }}>
      {children}
    </PollContext.Provider>
  )
}
