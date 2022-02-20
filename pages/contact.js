import React from "react";

const Contact = () => {
  return (
    <div className="sda-container">
      <main className="contact-container">
        <section className="contact-content-wrapper">
          <div className="contact-info-boxed">
            <div className="inner-content">
              <h1 className="title">SD Architectes</h1>
              <span className="text">32 Rue Thiers 17300 Rochefort S/ Mer</span>
              <span className="email">
                Email:
                <a
                  href="mailto:agence@sdarchitectes.fr"
                  target="_blank"
                  rel="noreferrer"
                >
                  agence@sdarchitectes.fr
                </a>
              </span>
            </div>
            <div className="inner-info">
              <p className="call">Téléphone</p>
              <span className="call">
                <a href="tel:0546995913">05 46 99 59 13</a>
              </span>
            </div>
          </div>
        </section>

        <section className="map-container">
          <div className="google-map-area">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4620.079454378818!2d-0.9638590610625006!3d45.93944780821861!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480140f650906015%3A0x50fda4c2a020bd1d!2sSourd-Durand%20Architectes!5e0!3m2!1sfr!2sfr!4v1612994408261!5m2!1sfr!2sfr"
              width="100%"
              height="550"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;
