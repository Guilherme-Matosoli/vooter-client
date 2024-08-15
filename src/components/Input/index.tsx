import { forwardRef, InputHTMLAttributes, Ref } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
};

export const Input = forwardRef((props: InputProps, ref: Ref<HTMLInputElement>) => {
  const { label, ...rest } = props;
  return (
    <section className="w-full flex flex-col gap-1">
      <label
        htmlFor={rest.name}
        className="font-main font-semibold text-2xl dark:text-white"
      >
        {label}
      </label>

      <input
        className="font-main outline-none p-5 rounded-lg border border-black
        bg-white dark:bg-black dark:text-white dark:border-white"
        {...rest}
        id={rest.name}
        ref={ref}
      />
    </section >
  );
})
