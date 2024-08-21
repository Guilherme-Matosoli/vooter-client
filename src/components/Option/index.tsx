import { Radio } from "../Radio";

export function Option() {
  return (
    <div className="w-full min-h-24 flex items-center justify-between border border-black 
                    rounded-lg p-4"
    >
      <span className="font-main font-semibold text-2xl">
        Option 1
      </span>

      <Radio />
    </div>
  );
};
