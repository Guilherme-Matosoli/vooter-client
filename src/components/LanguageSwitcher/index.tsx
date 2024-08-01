export function LanguageSwitcher() {
  return (
    <section className="flex gap-2 items-center justify-center">
      <button className="w-[30px] h-[30px] rounded-full  overflow-hidden">
        <img
          src="/brazilFlag.svg"
          alt="Language"
        />
      </button>

      <div className="border-[4px] border-t-dark border-l-dark border-r-black border-b-black w-1 h-1 rotate-45"></div>
    </section>
  );
};
