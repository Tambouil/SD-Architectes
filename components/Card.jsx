import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaBuilding } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";

const Card = ({ gallery }) => {
  const { title, slug, thumbnail, location, category } = gallery.fields;

  return (
    <li className="cards__item">
      <div className="card">
        <Link href={"/projets/" + slug}>
          <a>
            <div className="card__image">
              <Image
                src={"https:" + thumbnail.fields.file.url}
                alt="Vignette du projet"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </a>
        </Link>
        <div className="card__content">
          <div className="card__title">{title}</div>
          <ul className="card__text">
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
          <div className="btn-wrapper">
            <Link href={"/projets/" + slug}>
              <a className="btn_card">
                <span className="text">Voir le projet</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
};
export default Card;
