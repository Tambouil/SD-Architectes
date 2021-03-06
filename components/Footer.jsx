import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <footer className="sda-footer">
        <div className="footer-wrapper">
          <div className="footer-logo">
            <Link href="/">
              <a>
                <img src="/img/logo/logo-footer.png" alt="Footer logo" />
              </a>
            </Link>
          </div>

          <div className="grid-wrapper">
            <div className="contact-info address">
              <ul>
                <h4>Adresse</h4>
                <li>32 Rue Thiers</li>
                <li>17300 Rochefort S/Mer</li>
              </ul>
            </div>
            <div className="contact-info phone">
              <ul>
                <h4>Contact</h4>
                <li>
                  <a href="tel:0546995913">05 46 99 59 13</a>
                </li>
                <li>
                  <a
                    href="mailto:agence@sdarchitectes.fr"
                    target="_blank"
                    rel="noreferrer"
                  >
                    agence@sdarchitectes.fr
                  </a>
                </li>
              </ul>
            </div>
            <div className="contact-info about">
              <ul>
                <h4>À Propos</h4>
                <li>
                  <Link href="/mentions-legales">
                    <a>Mentions légales</a>
                  </Link>
                </li>
                <li>© {new Date().getFullYear()} SD Architectes</li>
              </ul>
            </div>
          </div>

          <div>
            <a
              href="mailto:agence@sdarchitectes.fr"
              target="_blank"
              rel="noreferrer"
              className="btn-footer"
            >
              Contactez Nous
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
