"use client";
import { useTranslation } from "@/app/i18n";
import { languages } from "@/app/i18n/settings";
import { useEffect, useRef, useState } from "react";
import i18next from "i18next";
import { LanguageOption } from "../LanguageOption";

export function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation(i18next.language, "languageSwitcher");

  const elementRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const clickInside = elementRef.current?.contains(e.target as Node);

      if (!clickInside) setOpen(false);
    };

    window.addEventListener("click", handleClick);

    return () => window.removeEventListener("click", handleClick);
  }, []);

  const languagesList = languages.map(lng => {
    return {
      name: t(lng),
      flag: `/flags/${lng}.svg`
    };
  });

  return (
    <div className="relative" ref={elementRef}>
      <section className="flex gap-2 items-center justify-center group">
        <button onClick={() => setOpen(!open)} className="p-2 rounded-full hover:bg-gray-300 flex items-center justify-center">
          <img
            src="/globe.svg"
            alt="Language"
          />
        </button>
      </section>

      <section className={`absolute -bottom-32 -left-20 rounded-2xl bg-white flex flex-col
                           w-52 overflow-hidden transition px-3
                           -translate-x-1/2 ${open ? "max-h-52 border border-gray-200" : "max-h-0"}`}
      >
        {
          open && languagesList.map((language, index) => {
            const itemPosition = index + 1;

            return (
              <LanguageOption
                key={language.name}
                language={language}
                position={itemPosition}
                maxItems={languagesList.length}
              />
            );
          })
        }
      </section>
    </div>
  );
};
