import { useTranslation } from "@/app/i18n";
import i18next from "i18next";
import { ButtonHTMLAttributes } from "react";

interface Language {
  name: string,
  flag: string
};

interface LanguageOptionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  language: Language
};

export function LanguageOption({ language, ...rest }: LanguageOptionProps) {
  const { t } = useTranslation(i18next.language, "languages");
  return (
    <button {...rest} className="w-full h-8 hover:bg-gray-200 transition flex items-center gap-3 p-3">
      <img
        src={language.flag}
        className="w-6 h-6 rounded-full"
      />

      <span>
        {t(language.name)}
      </span>
    </button>
  );
};
