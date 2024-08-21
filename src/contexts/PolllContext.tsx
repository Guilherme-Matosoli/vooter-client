"use client";
import { createContext, useState } from "react";

export interface FormFields {
  title: string,
  questions: { option: string }[]
};

const PollContext = createContext({} as FormFields);

export function PollContextProvider({ children }: { children: React.ReactNode }) {
  const [fields, setFields] = useState<FormFields>({
    title: '',
    questions: []
  });

  return (
    <PollContext.Provider value={{ title: fields?.title, questions: fields?.questions }}>
      {children}
    </PollContext.Provider>
  );
};
