import { useEffect, useRef, useState } from "react";
import { HeaderProps } from ".";
import { HeaderCTAs } from "./HeaderCTAs";

export function MobileHeader({ lng }: HeaderProps) {
  const [open, setOpen] = useState(false);

  const elementRef = useRef<HTMLElement>(null);
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const clickInside = elementRef.current?.contains(e.target as Node);

      if (!clickInside) setOpen(false);
    };

    window.addEventListener("click", handleClick);

    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <section ref={elementRef} className="flex items-center h-full relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center h-[45px] w-[45px] rounded-full hover:bg-gray-200"
      >
        <span className={`menuIcon ${open && "open"}`}></span>
      </button>

      <div className={`${open ? "flex" : "hidden"} flex-col absolute right-full top-full w-52 h-auto bg-red-200 p-5`}>
        <HeaderCTAs lng={lng} />
      </div>
    </section>
  );
};
