import "./styles.css";
import { InputHTMLAttributes, useRef } from "react";

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {

};

export function Radio({ ...props }: RadioProps) {
  const radioRef = useRef<HTMLInputElement>(null);

  function simulateClick() {
    radioRef.current!.click()
  };

  return (
    <section onClick={simulateClick} className="container relative w-[30px] h-[30px]">
      <input
        type="radio"
        {...props}
        ref={radioRef}
        hidden
      />

      <span className="check w-[30px] h-[30px] absolute top-0 left-0 bg-light 
                      rounded-full border border-black dark:bg-dark dark:border-white">
      </span>
    </section>
  )
}
