"use client";
import { useTranslation } from "@/app/i18n";
import { Poll } from "./page";
import i18n from "i18next"
import { Option } from "@/components/Option";

export function Questions({ questions, id }: Pick<Poll, "questions" | "id">) {
  const lng = i18n.language;
  const { t } = useTranslation(lng, "pollPage");

  return (
    <form className="w-full flex flex-col items-center">

      {
        questions.map(question => {
          return (
            <Option
              id={question.id}
              option={question.option}
            />
          )
        })
      }

      <button className="button bg-black text-white dark:bg-white 
        dark:border dark:border-black dark:text-black md:w-1/3"
      >
        {t("confirm")}
      </button>
    </form>
  );
};
