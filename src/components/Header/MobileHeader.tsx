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
    <section ref={elementRef} className="flex items-center h-full">
      <button
        onClick={() => setOpen(!open)}
        className="z-10 flex items-center justify-center h-[45px] w-[45px] rounded-full hover:bg-gray-200"
      >
        <span className={`menuIcon ${open && "open"}`}></span>
      </button>

      <div className={`${open ? "fixed" : "hidden"} flex items-center justify-center flex-col
                      absolute left-0 top-0 w-[calc(100vw-40px)] 
h-[calc(100dvh-40px)] bg-white p-5 rounded-lg dark:bg-black`}
      >
        <HeaderCTAs lng={lng} />
      </div>
    </section>
  );
};
