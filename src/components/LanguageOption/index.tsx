import { ButtonHTMLAttributes } from "react";

interface Language {
  name: string,
  flag: string
};

interface LanguageOptionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  language: Language
};

export function LanguageOption({ language, ...rest }: LanguageOptionProps) {
  return (
    <button {...rest} className="w-full h-8 hover:bg-gray-200 transition flex items-center gap-3 p-3">
      <img
        src={language.flag}
        className="w-6 h-6 rounded-full"
      />

      <span>
        {language.name}
      </span>
    </button>
  );
};
