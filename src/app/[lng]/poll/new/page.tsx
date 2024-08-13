"use client";
import { useTranslation } from "@/app/i18n";
import { Input } from "@/components/Input";
import { useState } from "react";

interface Options {
  [key: string]: string
};

interface NewPollParams {
  params: {
    lng: string
  };
};

export default function NewPoll({ params: { lng } }: NewPollParams) {
  const { t } = useTranslation(lng, "createPoll");

  const [options, setOptions] = useState<Options[]>([
    {
      option: "Opção 1"
    }
  ]);
  return (
    <main className="flex flex-1 items-center flex-col py-20">
      <h2 className="font-main font-bold text-4xl dark:text-white md:text-6xl">
        {t("createNewPoll")}
      </h2>
    </main>
  );
};
