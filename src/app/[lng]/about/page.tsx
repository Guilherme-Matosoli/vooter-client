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
    <main className="flex flex-col py-20 gap-5">
      <h2 className="font-main font-bold text-4xl dark:text-white md:text-6xl">
        {t("mainText")}
      </h2>

      <p className="font-main font-normal md:text-2xl dark:text-white">
        {t("description")}
      </p>

      <h3 className="font-main font-bold text-2xl md:text-4xl dark:text-white">
        {t("whyUse")}
      </h3>

      <article className="flex flex-col font-main font-normal gap-3 md:text-2xl">
        <p>
          <strong>{t("simplicity")}</strong> {t("simplicityDesc")}
        </p>

        <p>
          <strong>{t("versatility")}</strong> {t("versatilityDesc")}
        </p>

        <p>
          <strong>{t("engagement")}</strong> {t("engagementDesc")}
        </p>
      </article>

      <section>
        <h3>
          {t("developedBy")}
        </h3>
        <a>
          Guilherme Matos
        </a>
      </section>
    </main>
  );
};
