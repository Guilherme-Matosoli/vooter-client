"use client";
import { ThemeContext } from "@/contexts/ThemeConxtex";
import Image from "next/image";
import { useContext, useEffect } from "react";

export function ThemeSwitcher() {
  const { theme, setTheme } = useContext(ThemeContext);
  const localTheme = localStorage.getItem("theme");

  useEffect(() => {
    const darkPrefers = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (darkPrefers && !localTheme) {
      setTheme("dark");

      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark")
      return;
    };

    if (localTheme) setTheme(localTheme);
    if (localTheme == "dark") document.documentElement.classList.add("dark");
  }, [theme]);

  const changeTheme = () => {
    const localTheme = localStorage.getItem("theme");

    document.documentElement.classList.toggle("dark");

    if (localTheme == "light") {
      setTheme("dark")
      localStorage.setItem("theme", "dark")
      return
    };

    localStorage.setItem("theme", "light");
    setTheme("light");
  };

  return (
    <button
      className="flex items-center justify-center p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-900 transition"
      onClick={changeTheme}
    >
      <Image
        src={theme == "light" ? "/icons/sun.svg" : "/icons/moon.svg"}
        alt={theme == "light" ? "Sol" : "Lua"}
        width={30}
        height={30}
      />
    </button>
  )
}
