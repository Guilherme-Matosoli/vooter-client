import { forwardRef, InputHTMLAttributes, Ref } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string,
  hasDelButton?: boolean,
  onClick?: () => void
};

export const Input = forwardRef((props: InputProps, ref: Ref<HTMLInputElement>) => {
  const { hasDelButton, onClick, ...rest } = props;
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
          {...rest}
          id={props.name}
          ref={ref}
        />

        {
          props.hasDelButton && (
            <button className="p-5 aspect-square flex items-center justify-center bg-white
              rounded-lg border border-black cursor-pointer hover:bg-gray-200
              dark:bg-black dark:text-white dark:hover:bg-gray-800 dark:border-white"
              onClick={props.onClick}
            >
              <span className="w-5 h-[1px] bg-black dark:bg-white"></span>
            </button>
          )
        }
      </div>
    </section >
  );
})
