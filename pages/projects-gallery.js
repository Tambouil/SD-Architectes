import React from "react";
import { createClient } from "contentful";
import Card from "../components/Card";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({
    content_type: "projectGallery",
    order: "sys.createdAt",
  });
  return {
    props: {
      cards: res.items,
    },
  };
}

const gallery = ({ cards }) => {
  console.log(cards);
  return (
    <div>
      <main className="gallery-container">
        <h1 className="projects_title">Nos projets</h1>

        <ul className="cards">
          {cards.map((projectGallery) => (
            <Card key={projectGallery.sys.id} projectGallery={projectGallery} />
          ))}
        </ul>
      </main>
    </div>
  );
};

export default gallery;
