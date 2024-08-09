"use client";
import { createContext, Dispatch, SetStateAction, useState } from "react";

interface ThemeContextProps {
  theme: string,
  setTheme: Dispatch<SetStateAction<string>>
};

export const ThemeContext = createContext({} as ThemeContextProps);

export function ThemeContextProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
};
