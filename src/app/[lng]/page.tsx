import { useTranslation } from "../i18n";

interface HomeParams {
  params: {
    lng: string
  }
}

export default async function Home({ params: { lng } }: HomeParams) {
  const { t } = await useTranslation(lng, "home");
  return (
    <>{t("hello")} {lng}</>
  );
}
