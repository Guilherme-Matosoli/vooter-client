import { forwardRef, InputHTMLAttributes, Ref } from "react";
import { Radio } from "../Radio";

interface OptionProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string,
  option: string,
};

export const Option = forwardRef(({ option, id, ...rest }: OptionProps, ref: Ref<HTMLInputElement>) => {
  return (
    <label className="w-full min-h-24 flex items-center justify-between border border-black 
      rounded-lg p-4 dark:bg-black dark:border-white"
      htmlFor={id}
    >
      <span className="block font-main font-semibold text-2xl break-words dark:text-white w-2/3 h-auto">
        {option}
      </span>

      <Radio id={id} {...rest} ref={ref} />
    </label>
  );
});
