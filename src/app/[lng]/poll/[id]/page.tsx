import { api } from "@/services/api";
import { Questions } from "./questions";

export interface Poll {
  id: string,
  title: string,
  questions: { id: string, option: string }[]
};

interface PollPageProps {
  params: {
    id: string
  };
};

export default async function PollPage({ params: { id } }: PollPageProps) {
  const req = await api.get<Poll>(`/poll/${id}`);
  const poll = req.data;

  return (
    <main className="flex flex-1 flex-col gap-5 items-center justify-center py-5">
      <h1>{poll.title}</h1>
      <Questions
        questions={poll.questions}
        id={poll.id}
      />
    </main>
  )
};
