"use client";
import { createContext } from "react";

export const ThemeContext = createContext({});

export function ThemeContextProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeContext.Provider value={{}}>
      {children}
    </ThemeContext.Provider>
  )
};
