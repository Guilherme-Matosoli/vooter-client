"use client";
import { useTranslation } from "@/app/i18n";
import { Poll } from "./page";
import i18n from "i18next"
import { Option } from "@/components/Option";
import { useForm } from "react-hook-form";

export function Questions({ questions, id }: Pick<Poll, "questions" | "id">) {
  const lng = i18n.language;
  const { t } = useTranslation(lng, "pollPage");
  const { register, handleSubmit } = useForm({
    defaultValues: {
      voted_in: "",
      poll_id: id
    }
  });

  return (
    <form
      className="w-full flex flex-col items-center gap-6"
      onSubmit={handleSubmit(e => console.log(e))}
    >
      <section className="w-full flex flex-col gap-2">
        {
          questions.map(question => {
            return (
              <Option
                key={question.id}
                id={question.id}
                option={question.option}
                value={question.id}
                {...register("voted_in")}
              />
            )
          })
        }
      </section>

      <button className="button bg-black text-white dark:bg-white 
        dark:border dark:border-black dark:text-black md:w-1/3"
      >
        {t("confirm")}
      </button>
    </form>
  );
};
