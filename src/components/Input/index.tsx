import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {

};

export function Input({ ...rest }: InputProps) {
  return (
    <section>
      <label>
      </label>

      <input />
    </section>
  );
};
