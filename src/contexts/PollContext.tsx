"use client";
import { createContext, Dispatch, SetStateAction, useState } from "react";

interface Option {
  option: string
}

interface PollContextProps {
  title: string,
  setTitle: Dispatch<SetStateAction<string>>,
  options: Option[],
  setOptions: Dispatch<SetStateAction<Option[]>>
};

export const PollContext = createContext({} as PollContextProps);

export function PollContextProvider({ children }: { children: React.ReactNode }) {
  const [title, setTitle] = useState("");
  const [options, setOptions] = useState<Option[]>([]);

  return (
    <PollContext.Provider value={{ title, setTitle, options, setOptions }}>
      {children}
    </PollContext.Provider>
  )
}
