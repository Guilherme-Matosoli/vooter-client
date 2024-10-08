import { useTranslation } from "@/app/i18n";
import { languages } from "@/app/i18n/settings";
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
  const isActualLanguage = language.name == i18next.language;

  const actualPath = window.location.pathname;

  const handleHref = () => {
    let path = "";

    if (isActualLanguage) return "#";

    languages.forEach(lang => {
      if (actualPath.includes(lang)) path = actualPath.replace(lang, language.name);
    });

    return path;
  };

  return (
    <a href={handleHref()} className={`w-full group transition flex items-center gap-2
                                      ${!isLast && "border-b border-gray-200 dark:border-gray-800"} 
                                      py-3 cursor-pointer`
    }>
      <img
        src={language.flag}
        className="w-7 h-7 rounded-full"
      />

      <span className={`font-main font-semibold  ${isActualLanguage
        ? "text-black dark:text-white"
        : "text-gray-400 dark:text-gray-600"}
group-hover:text-black dark:group-hover:text-white`}
      >
        {t(language.name)}
      </span>
    </a>
  );
};
