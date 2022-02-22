import React from "react";
import { createClient } from "contentful";
import Card from "../components/Card";
import Meta from "../components/Meta";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({
    content_type: "gallery",
    order: "-sys.createdAt",
  });
  return {
    props: {
      cards: res.items,
    },
  };
}

const Gallery = ({ cards }) => {
  return (
    <>
      <Meta title="SD Architectes | Nos projets" />
      <div className="sda-container">
        <main className="gallery-container">
          <h1 className="projects_title">Nos projets</h1>

          <ul className="cards">
            {cards.map((gallery) => (
              <Card key={gallery.sys.id} gallery={gallery} />
            ))}
          </ul>
        </main>
      </div>
    </>
  );
};

export default Gallery;
