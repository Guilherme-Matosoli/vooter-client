"use client";
import { useTranslation } from "@/app/i18n";

interface AboutParams {
  params: {
    lng: string
  }
}

export default function About({ params: { lng } }: AboutParams) {
  const { t } = useTranslation(lng, "about");

  return (
    <main className="flex flex-col items-center py-20">
      <h2></h2>
    </main>
  );
};
