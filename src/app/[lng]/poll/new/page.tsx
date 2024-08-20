"use client";
import { useTranslation } from "@/app/i18n";
import { Input } from "@/components/Input";
import { useForm, useFieldArray } from "react-hook-form";

interface NewPollParams {
  params: {
    lng: string
  };
};

interface FormFields {
  title: string,
  questions: { option: string }[]
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

  return (
    <main className="flex flex-1 items-center flex-col py-20">
      <h2 className="font-main font-bold text-4xl dark:text-white md:text-6xl">
        {t("createNewPoll")}
      </h2>

      <form
        onSubmit={handleSubmit(e => console.log(e))}
        className="w-full"
      >
        <Input
          label={t("label.title")}
          placeholder={t("placeholder.title")}
          {...register("title", { required: true })}
        />

        {
          fields.map((option, index) => {
            const hasDelOptionButton = index > 1;

            return <Input
              label={`${t("label.option")} ${index + 1}`}
              placeholder={`${t("placeholder.option")} + ${index + 1}`}
              {...option}
            />
          })
        }
      </form>
    </main>
  );
};
