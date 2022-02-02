import React from "react";

const legals = () => {
  return (
    <div>
      <main className="notice-background">
        <div className="legal-wrapper">
          <h1>Mentions Légales</h1>
          <div className="site-editor">
            <h3 className="sub-title">Éditeur du site</h3>
            <ul>
              <li>SD Architectes</li>
              <li>
                SELARL au capital de 10 000€ immatriculée au RCS de La Rochelle
                sous le numéro B 480 478 353
              </li>
              <li>siège social situé au 32 RUE THIERS - 17300 ROCHEFORT</li>
              <li>numéro de TVA intracommunautaire FR36480478353</li>
              <li>numéro SIRET 48047835300026</li>
              <li>agence@sdarchitectes.fr - 05 46 99 59 13</li>
              <li>
                <a href="http://www.sdarchitectes.com/">
                  www.sdarchitectes.com
                </a>
              </li>
              <li>Directeur de la publication : Pascale Durand</li>
            </ul>
          </div>

          <div className="site-conception">
            <h3 className="sub-title">Conception du site</h3>
            <p>Conception et développement : Récif Production</p>
          </div>

          <div className="hosting">
            <h3 className="sub-title">Hébergement</h3>
            <ul>
              <li>
                L’hébergement du site est réalisé par la société 1 & 1 IONOS.
              </li>
              <li>Adresse : 7 Place de la gare - 57200 SARREGUEMINES</li>
              <li>09 70 808 911</li>
              <li>
                <a href="https://www.ionos.fr/" target="blank">
                  www.ionos.fr
                </a>
              </li>
              <li>SAS au capital de 100 000 €</li>
              <li>RCS Sarreguemines B 431 303 775</li>
              <li>N° TVA : FR13431303775</li>
            </ul>
          </div>

          <div className="personnal-data">
            <h3 className="sub-title">Protection des données personnelles</h3>
            <p>
              L'agence SD Architectes ne collecte et n'utilise en aucun cas vos
              données personnelles.
            </p>
          </div>

          <div className="intellectual-property">
            <h3 className="sub-title">Propriété intellectuelle</h3>
            <p>
              Toutes les pages de ce site web sont protégées par le droit
              d'auteur français et la législation sur les bases de données.
              Aucune reproduction de son contenu, même partielle n'est
              autorisée.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default legals;
