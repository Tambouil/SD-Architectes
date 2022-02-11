import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaBuilding } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";

const Card = ({ gallery }) => {
  const { title, thumbnail, location, category } = gallery.fields;
  return (
    <li className="cards__item">
      <div className="card">
        <Link href="/">
          <a>
            <div className="card__image">
              <img
                src={"https:" + thumbnail.fields.file.url}
                alt="Vignette du projet"
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
            <button className="btn_card">
              <Link href="/">
                <a>
                  <span className="text">Voir le projet</span>
                </a>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};
export default Card;
