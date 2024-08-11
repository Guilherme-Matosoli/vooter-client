"use client"
import Link from "next/link";
import { useTranslation } from "../i18n";

interface HomeParams {
  params: {
    lng: string
  };
};

export default function Home({ params: { lng } }: HomeParams) {
  const { t } = useTranslation(lng, "home");
  return (
    <main className="flex flex-1 flex-col items-center py-20 justify-center gap-6 md:gap-0 md:justify-between">
      <div className="w-full flex flex-col gap-5">
        <h2 className="font-main font-bold text-center text-4xl dark:text-white md:text-6xl">
          {t("mainText")}
        </h2>

        <h3 className="font-main font-bold text-center text-secLight dark:text-secDark md:text-3xl md:w-2/3 md:m-auto">
          {t("secondaryText")}
        </h3>
      </div>

      <img
        src="/ilustration.svg"
        alt={t("ilustration")}
        draggable={false}
      />

      <section className="w-full flex flex-col gap-3 items-center md:flex-row md:w-1/2">
        <Link href="/newpoll" className="button bg-black text-white dark:bg-white 
          dark:border dark:border-black dark:text-black"
        >
          {t("newPoll")}
        </Link>


        <Link href="/about" className="button bg-white text-black border border-black 
          dark:bg-black dark:border-none dark:text-white md:w-60"
        >
          {t("about")}
        </Link>
      </section>

    </main>
  );
}
