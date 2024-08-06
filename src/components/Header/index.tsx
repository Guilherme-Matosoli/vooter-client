import { useMediaQuery } from "@/hooks/useMediaQuery";
import { HeaderCTAs } from "./HeaderCTAs";
import { MobileHeader } from "./MobileHeader";

export interface HeaderProps {
  lng: string
};

export function Header({ lng }: HeaderProps) {
  const matches = useMediaQuery(768);

  return (
    <header className="flex justify-between items-center w-full bg-white dark:bg-black py-4 px-5 rounded-lg">
      <h1 className="font-main font-bold text-2xl text-light dark:text-dark">
        <a href="/">
          Votter
        </a>
      </h1>

      {
        !matches
          ?
          <HeaderCTAs lng={lng} />
          :
          <MobileHeader />
      }
    </header>
  )
}
