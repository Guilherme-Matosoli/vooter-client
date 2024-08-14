"use client";
import { useTranslation } from "@/app/i18n";
import { Input } from "@/components/Input";

interface NewPollParams {
  params: {
    lng: string
  };
};

export default function NewPoll({ params: { lng } }: NewPollParams) {
  const { t } = useTranslation(lng, "createPoll");

  return (
    <main className="flex flex-1 items-center flex-col py-20">
      <h2 className="font-main font-bold text-4xl dark:text-white md:text-6xl">
        {t("createNewPoll")}
      </h2>

      <Input
        name="title"
        label="Título:"
        placeholder="Digite o título"
      />
    </main>
  );
};
