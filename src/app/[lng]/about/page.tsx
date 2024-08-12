"use client";
import { useTranslation } from "@/app/i18n";

interface AboutParams {
  params: {
    lng: string
  }
}

export default function About({ params: { lng } }: AboutParams) {
  const { t } = useTranslation(lng, "aboutPage");

  return (
    <main className="flex flex-col py-20">
      <h2 className="font-main font-bold text-4xl dark:text-white md:text-6xl">
        {t("mainText")}
      </h2>

      <p className="font-main font-normal md:text-2xl dark:text-white">
        {t("description")}
      </p>

      <h3 className="font-main font-bold text-2xl md:text-4xl dark:text-white">
        {t("whyUse")}
      </h3>

      <article className="flex flex-col font-main font-normal md:text-2xl">
        <p>
          <strong>{t("simplicity")}</strong> {t("simplicityDesc")}
        </p>

        <p>
          <strong></strong>
        </p>

        <p>
          <strong></strong>
        </p>
      </article>
    </main>
  );
};
