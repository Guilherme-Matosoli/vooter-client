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
        <button onClick={() => setOpen(!open)} className="w-[30px] h-[30px] rounded-full  overflow-hidden">
          <img
            src={`/flags/${i18next.language}.svg`}
            alt="Language"
            className="object-fill"
          />
        </button>

        <div className={`border-[4px] border-t-transparent border-l-transparent
border-r-black border-b-black w-1 h-1 rotate-45 dark:border-r-white dark:border-b-white group-hover:rotate-[225deg] transition`}>
        </div>
      </section>

      <section className={`absolute top-full rounded-xl bg-white flex flex-col
                           w-52 overflow-hidden height-transition
                           -translate-x-1/2 ${open ? "max-h-52 border border-black" : "max-h-0"}`}
      >
        <LanguageOption />

      </section>
    </div>
  );
};
