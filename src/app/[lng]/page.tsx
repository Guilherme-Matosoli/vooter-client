"use client"
import { useTranslation } from "../i18n";

interface HomeParams {
  params: {
    lng: string
  };
};

export default function Home({ params: { lng } }: HomeParams) {
  const { t } = useTranslation(lng, "home");
  return (
    <>{t("hello")} {lng}</>
  );
}
