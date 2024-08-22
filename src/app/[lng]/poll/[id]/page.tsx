
interface PollProps {
  params: {
    lng: string,
    id: string
  };
};

export default function Poll({ params: { lng, id } }: PollProps) {

  return (
    <h1>lng : {lng} id: {id}</h1>
  )
};
