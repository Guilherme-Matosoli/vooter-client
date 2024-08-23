"use client";
import { useTranslation } from "@/app/i18n";
import { Poll } from "./page";
import i18n from "i18next"

export function Questions({ questions }: Pick<Poll, "questions">) {
  const lng = i18n.language;
  const { t } = useTranslation(lng, "pollPage");

  return (
    <form>

      <button>
        {t("confirm")}
      </button>
    </form>
  );
};
