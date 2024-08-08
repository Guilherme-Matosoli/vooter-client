import { ButtonHTMLAttributes } from "react";

interface LanguageOptionProps extends ButtonHTMLAttributes<HTMLButtonElement> {

};

export function LanguageOption({ ...rest }: LanguageOptionProps) {
  return (
    <button {...rest} className="w-full h-8 hover:bg-gray-200 transition flex items-center gap-3 p-3">
      <img
        src="/flags/en.svg"
        className="w-6 h-6 rounded-full"
      />

      <span>
        English
      </span>
    </button>
  );
};
