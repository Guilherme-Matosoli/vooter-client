"use client";
import { useTranslation } from "@/app/i18n";
import i18next from "i18next";

export function Footer() {
  const { t } = useTranslation(i18next.language, "footer");
  return (
    <footer className="w-full flex justify-center">
      <span className="font-main text-gray-light text-lg text-center">
        &copy; {new Date().getFullYear()} Votter. {t("copy")}
      </span>
    </footer>
  );
};
