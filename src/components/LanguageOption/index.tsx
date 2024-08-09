import { useTranslation } from "@/app/i18n";
import i18next from "i18next";

interface Language {
  name: string,
  flag: string
};

interface LanguageOptionProps {
  language: Language,
  position: number,
  maxItems: number
};

export function LanguageOption({ language, position, maxItems }: LanguageOptionProps) {
  const { t } = useTranslation(i18next.language, "languages");

  const isLast = position == maxItems;
  return (
    <a href={`/${language.name}`} className={`w-full group transition flex items-center gap-2
                  ${!isLast && "border-b border-gray-400"} py-3 cursor-pointer`
    }>
      <img
        src={language.flag}
        className="w-7 h-7 rounded-full"
      />

      <span className="group-hover:text-gray-400">
        {t(language.name)}
      </span>
    </a>
  );
};
