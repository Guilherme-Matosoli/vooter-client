"use client";

import { useTranslation } from "@/app/i18n";
import { PollContext } from "@/contexts/PolllContext";
import { useContext } from "react";

interface PollPreviewProps {
  params: {
    lng: string;
  };
};

export default function PollPreview({ params: { lng } }: PollPreviewProps) {
  const { t } = useTranslation(lng, "pollPreview");

  const { fields } = useContext(PollContext);

  return (
    <main className="flex flex-1 flex-col gap-5 items-center justify-center py-5">
      <h1 className="font-main font-bold text-4xl dark:text-white md:text-6xl">
        {t("mainTitle")}
      </h1>

      <section className="w-full flex flex-col flex-1 bg-white p-5 rounded-lg">
        <h2>
          {fields.title || "Building"}
        </h2>
      </section>
    </main>
  );
};
