"use client"
import { Header } from "@/components/Header";
import { useTranslation } from "./i18n";
import i18next from "i18next";

export default function Home() {
  const { t } = useTranslation(i18next.language, "home");
  return (
    <main className="content">
      <Header lng={i18next.language} />
    </main>
  );
}
