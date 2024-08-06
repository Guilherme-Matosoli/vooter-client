import Link from "next/link";
import { useTranslation } from "@/app/i18n";
import { LanguageSwitcher } from "../LanguageSwitcher";
import { ThemeSwitcher } from "../ThemeSwitcher";
import { HeaderProps } from ".";

export function DesktopHeader({ lng }: HeaderProps) {
  const { t } = useTranslation(lng, "header");
  return (
    <header className="hidden md:flex justify-between items-center w-full bg-white dark:bg-black py-4 px-5 rounded-lg">
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

      <section className="flex items-center gap-2">
        <LanguageSwitcher />
        <ThemeSwitcher />
      </section>
    </header>
  )
}
