import Link from "next/link";
import { ChangeThemeBtn } from "../ChangeThemeBtn";
import { useTranslation } from "@/app/i18n";

interface HeaderProps {
  lng: string
};

export function Header({ lng }: HeaderProps) {
  const { t } = useTranslation(lng, "header");
  return (
    <header className="flex justify-between items-center w-full bg-white dark:bg-black p-5 rounded-lg">
      <h1 className="font-main font-bold text-2xl text-light dark:text-dark">
        <a href="/">
          Votter
        </a>
      </h1>

      <nav className="flex gap-8">
        <Link className="link" href="/">
          {t("home")}
        </Link>
        <Link className="link" href="/">
          {t("newPoll")}
        </Link>
      </nav>

      <ChangeThemeBtn />
    </header>
  )
}
