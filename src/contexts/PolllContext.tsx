"use client";
import { createContext, Dispatch, SetStateAction, useState } from "react";

export interface FormFields {
  title: string,
  questions: { option: string }[]
};

interface ContextProps {
  formFields: FormFields,
  setFormFields: Dispatch<SetStateAction<FormFields>>
};

export const PollContext = createContext({} as ContextProps);

export function PollContextProvider({ children }: { children: React.ReactNode }) {
  const [formFields, setFormFields] = useState<FormFields>({
    title: "",
    questions: [{ option: '' }, { option: '' }]
  },);

  return (
    <PollContext.Provider value={{ formFields, setFormFields }}>
      {children}
    </PollContext.Provider>
  );
};
