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
    <main className="content">
      <Header />
    </main>
  );
}
