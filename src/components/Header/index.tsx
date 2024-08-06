import { HeaderCTAs } from "./HeaderCTAs"

export interface HeaderProps {
  lng: string
};

export function Header({ lng }: HeaderProps) {
  return (
    <header className="hidden md:flex justify-between items-center w-full bg-white dark:bg-black py-4 px-5 rounded-lg">
      <h1 className="font-main font-bold text-2xl text-light dark:text-dark">
        <a href="/">
          Votter
        </a>
      </h1>

      <HeaderCTAs lng={lng} />
    </header>
  )
}
