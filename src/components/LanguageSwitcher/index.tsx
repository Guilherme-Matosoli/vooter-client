"use client";
import { useState } from "react";

export function LanguageSwitcher() {
  const [active, setActive] = useState(false);

  return (
    <div className="relative">
      <section className="flex gap-2 items-center justify-center group">
        <button onClick={() => setActive(!active)} className="w-[30px] h-[30px] rounded-full  overflow-hidden">
          <img
            src="/usaFlag.svg"
            alt="Language"
            className="object-fill"
          />
        </button>

        <div className={`border-[4px] border-t-transparent border-l-transparent
border-r-black border-b-black w-1 h-1 rotate-45 dark:border-r-white dark:border-b-white group-hover:rotate-[225deg] transition`}>
        </div>
      </section>

      {
        active && (
          <section className="absolute top-full rounded-xl bg-white w-52 min-h-10 border border-black -translate-x-1/2">
          </section>
        )
      }
    </div>
  );
};
