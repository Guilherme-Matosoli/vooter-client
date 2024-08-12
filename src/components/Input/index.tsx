import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
};

export function Input({ label, ...rest }: InputProps) {
  return (
    <section className="w-full flex flex-col gap-1">
      <label
        htmlFor={rest.name}
        className="font-main font-semibold text-2xl dark:text-white"
      >
        {label}
      </label>

      <input {...rest} id={rest.name} />
    </section >
  );
};
