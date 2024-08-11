import Link from "next/link";
import { LanguageSwitcher } from "../LanguageSwitcher";
import { ThemeSwitcher } from "../ThemeSwitcher";
import { HeaderProps } from ".";
import { useTranslation } from "@/app/i18n";

export function HeaderCTAs({ lng }: HeaderProps) {
  const { t } = useTranslation(lng, "header");
  return (
    <>
      <nav className="flex gap-8 flex-col items-center md:flex-row">
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
    </>
  )
}
