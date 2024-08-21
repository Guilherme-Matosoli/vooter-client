import { InputHTMLAttributes } from "react";

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {

};

export function Radio({ ...props }: RadioProps) {
  return (
    <input
      type="radio"
      {...props}
    />
  )
}
