import { createClient } from "contentful";
import CarouselHome from "../components/CarouselHome";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({
    content_type: "gallery",
  });
  return {
    props: {
      cards: res.items,
    },
  };
}

export default function Home({ cards }) {
  return (
    <div>
      <CarouselHome carousel={cards} />
    </div>
  );
}
