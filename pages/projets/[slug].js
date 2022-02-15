import React from "react";
import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { FaBuilding } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "gallery",
  });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "gallery",
    "fields.slug": params.slug,
  });
  return {
    props: { gallery: items[0] },
  };
}

const projectDetails = ({ gallery }) => {
  console.log(gallery);

  const {
    featuredImage,
    title,
    subTitle,
    category,
    location,
    description,
    resume,
  } = gallery.fields;
  return (
    <>
      <main className="details-background">
        <div className="project-image">
          <img
            src={"https:" + featuredImage.fields.file.url}
            alt="perspective"
          />
        </div>
        <section className="details-wrapper">
          <h1 className="details-title">{title}</h1>
          <h2 className="details-subtitle">{subTitle}</h2>
          <ul className="details-caption">
            <li>
              <span>
                <FaBuilding />
              </span>
              {category}
            </li>
            <li>
              <span>
                <FaLocationArrow />
              </span>
              {location}
            </li>
          </ul>
          <div className="details-description">
            <div className="text-description">
              {documentToReactComponents(description)}
            </div>
            <p className="details-box">{documentToReactComponents(resume)}</p>
          </div>
        </section>
        <section className="details-nav">
          <div className="prev-button">
            <button className="btn_details">
              <Link href="/">
                <a>
                  <span>
                    <FaChevronLeft />
                  </span>
                  Précédent
                </a>
              </Link>
            </button>
          </div>
          <div className="next-button">
            <button className="btn_details">
              <Link href="/">
                <a>
                  Suivant
                  <span>
                    <FaChevronRight />
                  </span>
                </a>
              </Link>
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default projectDetails;
