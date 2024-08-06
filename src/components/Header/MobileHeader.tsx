import { useState } from "react";

export function MobileHeader() {
  const [open, setOpen] = useState(false);

  return (
    <section className="flex items-center h-full">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center h-[45px] w-[45px] rounded-full hover:bg-gray-200"
      >
        <span className={`menuIcon ${open && "open"}`}></span>
      </button>
    </section>
  );
};
