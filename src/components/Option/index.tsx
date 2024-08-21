import { Radio } from "../Radio";

export function Option() {
  return (
    <div className="w-full min-h-24 flex items-center justify-between border border-black 
      rounded-lg p-4 dark:bg-black dark:border-white"
    >
      <span className="font-main font-semibold text-2xl dark:text-white">
        Option 1
      </span>

      <Radio />
    </div>
  );
};
