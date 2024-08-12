import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
};

export function Input({ label, ...rest }: InputProps) {
  return (
    <section>
      <label htmlFor={label}>
        {label}
      </label>

      <input name={label} />
    </section>
  );
};
