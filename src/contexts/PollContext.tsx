"use client";
import { createContext, Dispatch, SetStateAction, useState } from "react";

interface Option {
  option: string
}

interface PollContextProps {
  title: string,
  options: Option[],
  setOptions: Dispatch<SetStateAction<Option[]>>
};

export const PollContext = createContext({} as PollContextProps);

export function PollContextProvider({ children }: { children: React.ReactNode }) {
  const [options, setOptions] = useState<Option[]>([]);

  return (
    <PollContext.Provider value={{ title: "", options, setOptions }}>
      {children}
    </PollContext.Provider>
  )
}
