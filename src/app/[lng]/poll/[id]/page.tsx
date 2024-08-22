interface Poll {
  id: string,
  questions: { id: string, option: string }[]
};

interface PollPageProps {
  params: {
    lng: string,
    id: string
  };
};

export default async function PollPage({ params: { lng, id } }: PollPageProps) {

  return (
    <main className="flex flex-1 flex-col gap-5 items-center justify-center py-5">
      <h1></h1>
    </main>
  )
};
