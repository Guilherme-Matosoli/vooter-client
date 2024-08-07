"use client";
import { useEffect, useRef, useState } from "react";

export function LanguageSwitcher() {
  const [open, setOpen] = useState(false);

  const elementRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const clickInside = elementRef.current?.contains(e.target as Node);

      if (!clickInside) setOpen(false);
    };

    window.addEventListener("click", handleClick);

    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="relative" ref={elementRef}>
      <section className="flex gap-2 items-center justify-center group">
        <button onClick={() => setOpen(!open)} className="w-[30px] h-[30px] rounded-full  overflow-hidden">
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
        open && (
          <section className="absolute top-full rounded-xl bg-white w-52 min-h-10 border border-black -translate-x-1/2">
          </section>
        )
      }
    </div>
  );
};
