"use client";
import { useTranslation } from "@/app/i18n";
import { Input } from "@/components/Input";
import { FormFields, PollContext } from "@/contexts/PolllContext";
import { useRouter } from "next/navigation";
import { useContext } from "react";

import { useForm, useFieldArray } from "react-hook-form";

interface NewPollParams {
  params: {
    lng: string
  };
};


export default function NewPoll({ params: { lng } }: NewPollParams) {
  const { t } = useTranslation(lng, "createPoll");

  const { control, handleSubmit, register } = useForm<FormFields>({
    defaultValues: {
      title: "",
      questions: [{ option: '' }, { option: '' }]
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "questions"
  });

  const { setFields } = useContext(PollContext);
  const router = useRouter();
  function saveDataInContext(data: FormFields) {
    setFields(data);
    router.push("/poll/preview");
  };

  return (
    <main className="flex flex-1 items-center justify-center flex-col py-5 gap-5">
      <h1 className="font-main font-bold text-4xl dark:text-white md:text-6xl">
        {t("createNewPoll")}
      </h1>

      <form
        onSubmit={handleSubmit(saveDataInContext)}
        className="w-full flex flex-col items-center gap-5 md:gap-10"
      >
        <Input
          label={t("label.title")}
          placeholder={t("placeholder.title")}
          {...register("title", { required: true })}
        />

        {
          fields.map((option, index) => {
            const hasDelButton = index > 1;

            return (
              <Input
                key={option.id}
                label={`${t("label.option")} ${index + 1}`}
                placeholder={`${t("placeholder.option")} ${index + 1}`}
                hasDelButton={hasDelButton}
                onClick={() => remove(index)}
                {...register(`questions.${index}.option`, { required: true })}
              />
            )
          })
        }

        <section className="w-full flex flex-col gap-3 items-center md:flex-row md:w-1/2">
          <button className="button bg-white text-black border border-black 
          dark:bg-black dark:border-none dark:text-white"
            onClick={() => append({ option: "" })}
          >
            {t("button.addOption")}
          </button>

          <button className="button bg-black text-white dark:bg-white 
          dark:border dark:border-black dark:text-black"
          >
            {t("button.continue")}
          </button>
        </section>
      </form>
    </main>
  );
};
