interface HomeParams {
  params: {
    lng: string
  }
}

export default function Home({ params }: HomeParams) {
  return (
    <>Hello, world {params.lng}</>
  );
}
