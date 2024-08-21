"use client";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { HeaderCTAs } from "./HeaderCTAs";
import { MobileHeader } from "./MobileHeader";
import { ThemeContextProvider } from "@/contexts/ThemeConxtex";

export interface HeaderProps {
  lng: string
};

export function Header({ lng }: HeaderProps) {
  const matches = useMediaQuery(768);

  return (
    <header className="relative flex justify-between items-center w-full bg-white dark:bg-black py-4 px-5 rounded-lg">
      <a href="/" className="z-10 font-main font-bold text-2xl text-light dark:text-dark">
        Votter
      </a>

      <ThemeContextProvider>
        {
          !matches
            ?
            <HeaderCTAs lng={lng} />
            :
            <MobileHeader lng={lng} />
        }
      </ThemeContextProvider>

    </header>
  )
}
