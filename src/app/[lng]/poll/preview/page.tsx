"use client";
import { useTranslation } from "@/app/i18n";
import { Option } from "@/components/Option";
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

      <section className="w-full flex items-center justify-center flex-col gap-5 bg-white p-5 rounded-lg
                          dark:bg-black"
      >
        <h2 className="font-main font-semibold text-3xl dark:text-white">
          {fields.title || "Building"}
        </h2>

        <div className="flex flex-col w-full gap-2">
          <Option />
          <Option />
          <Option />
        </div>
      </section>
    </main>
  );
};
