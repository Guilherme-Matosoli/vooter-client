"use client";
import { createContext, Dispatch, SetStateAction, useState } from "react";

export interface FormFields {
  title: string,
  questions: { option: string }[]
};

interface ContextProps {
  fields: FormFields,
  setFields: Dispatch<SetStateAction<FormFields>>
};

export const PollContext = createContext({} as ContextProps);

export function PollContextProvider({ children }: { children: React.ReactNode }) {
  const [fields, setFields] = useState<FormFields>({
    title: '',
    questions: []
  });

  return (
    <PollContext.Provider value={{ fields, setFields }}>
      {children}
    </PollContext.Provider>
  );
};
