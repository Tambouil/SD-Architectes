import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ projectGallery }) => {
  const { titre, vignette, lieuDuProjet, typeDeProjet } = projectGallery.fields;
  return (
    <li className="cards__item">
      <div className="card">
        <Link href="/">
          <a>
            <div className="card__image">
              <Image
                src={"https:" + vignette.fields.file.url}
                width={vignette.fields.file.details.image.width}
                height={vignette.fields.file.details.image.height}
                alt="Vignette du projet"
              />
            </div>
          </a>
        </Link>
        <div className="card__content">
          <div className="card__title">{titre}</div>
          <ul className="card__text">
            <li>
              <i className="fas fa-map-marker-alt"></i>
              {typeDeProjet}
              <i className="fas fa-map-marker-alt"></i>
              {lieuDuProjet}
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
