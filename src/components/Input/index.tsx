import { forwardRef, InputHTMLAttributes, Ref } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string,
  hasDelButton?: boolean;
};

export const Input = forwardRef((props: InputProps, ref: Ref<HTMLInputElement>) => {
  return (
    <section className="w-full flex flex-col gap-1">
      <label
        htmlFor={props.name}
        className="font-main font-semibold text-2xl dark:text-white"
      >
        {props.label}
      </label>

      <div className="w-full h-auto flex items-center gap-3">
        <input
          className="font-main w-full outline-none p-5 rounded-lg border border-black
        bg-white dark:bg-black dark:text-white dark:border-white"
          {...props}
          id={props.name}
          ref={ref}
        />

        <button className="p-5 aspect-square flex items-center justify-center bg-white
          rounded-lg border border-black cursor-pointer hover:bg-gray-200"
        >
          <span className="w-5 h-[1px] bg-black"></span>
        </button>
      </div>
    </section >
  );
})
