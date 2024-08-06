import { useState } from "react";
import { HeaderProps } from ".";
import { HeaderCTAs } from "./HeaderCTAs";

export function MobileHeader({ lng }: HeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <section className="flex items-center h-full relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center h-[45px] w-[45px] rounded-full hover:bg-gray-200"
      >
        <span className={`menuIcon ${open && "open"}`}></span>
      </button>

      <div className={`${open ? "flex" : "hidden"} flex-col absolute right-full top-full w-52 h-20 bg-red-200`}>
        <HeaderCTAs lng={lng} />
      </div>
    </section>
  );
};
