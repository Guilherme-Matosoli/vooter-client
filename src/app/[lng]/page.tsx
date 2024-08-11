"use client"
import { Header } from "@/components/Header";
import { useTranslation } from "../i18n";

interface HomeParams {
  params: {
    lng: string
  };
};

export default function Home({ params: { lng } }: HomeParams) {
  const { t } = useTranslation(lng, "home");
  return (
    <main className="flex flex-1 flex-col items-center justify-center">
      <div className="w-full flex flex-col gap-5">
        <h2 className="font-main font-bold text-center text-4xl dark:text-white md:text-6xl">
          {t("mainText")}
        </h2>

        <h3 className="font-main font-bold text-center text-secLight dark:text-secDark">
          {t("secondaryText")}
        </h3>
      </div>

      <img
        src="/ilustration.svg"
        alt={t("ilustration")}
      />

    </main>
  );
}
