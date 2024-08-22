"use client";
import { useTranslation } from "@/app/i18n";
import { Option } from "@/components/Option";
import Rings from "@/components/Rings";
import { FormFields, PollContext } from "@/contexts/PolllContext";
import { useFetch } from "@/hooks/useFetch";
import { usePrivateRoute } from "@/hooks/usePrivateRoute";
import axios from "axios";
import Link from "next/link";

import { useContext, useEffect } from "react";

interface PollPreviewProps {
  params: {
    lng: string;
  };
};

export default function PollPreview({ params: { lng } }: PollPreviewProps) {
  const { t } = useTranslation(lng, "pollPreview");

  const { formFields } = useContext(PollContext);
  const valid = usePrivateRoute({ condition: formFields.title.length > 1 });

  const { execute, data, loading, error } = useFetch<FormFields>({
    path: "/poll/create",
    method: "post",
    body: formFields
  });

  return valid && (
    <main className="flex flex-1 flex-col gap-5 items-center justify-center py-5">
      <h1 className="font-main font-bold text-4xl dark:text-white md:text-6xl">
        {t("mainTitle")}
      </h1>

      <section className="w-full flex items-center justify-center flex-col gap-5 bg-white p-5 rounded-lg
                          dark:bg-black"
      >
        <h2 className="font-main font-semibold text-3xl dark:text-white break-words w-2/3 text-center">
          {formFields.title}
        </h2>

        <div className="flex flex-col w-full gap-2">
          {
            formFields.questions.map(question => {
              return (
                <Option
                  option={question.option}
                  id={question.option}
                />
              )
            })
          }
        </div>
      </section>

      <section className="w-full flex flex-col gap-3 items-center md:flex-row md:w-1/2">
        <button className="button bg-white text-black border border-black 
          dark:bg-black dark:border-none dark:text-white"
          onClick={execute}
        >
          {
            loading ? <Rings width={30} height={30} /> : t("button.create")
          }
        </button>

        <Link href="/poll/new" className="button bg-black text-white dark:bg-white 
          dark:border dark:border-black dark:text-black"
        >
          {t("button.back")}
        </Link>
      </section>
    </main>
  );
};
