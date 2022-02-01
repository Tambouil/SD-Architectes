import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IconContext } from "react-icons";
import { useRouter } from "next/router";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const router = useRouter();

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <Link href="/" className="nav-logo">
            <Image src="/logo.png" alt="SDA Logo" width={60} height={30} />
          </Link>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link href="/" passHref className="nav-links">
                <a className={router.pathname == "/" ? "active" : ""}>
                  Accueil
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/projects-gallery" passHref className="nav-links">
                <a
                  className={
                    router.pathname == "/projects-gallery" ? "active" : ""
                  }
                >
                  Projets
                </a>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link href="/about" passHref className="nav-links">
                <a className={router.pathname == "/about" ? "active" : ""}>
                  Agence
                  <IconContext.Provider value={{ className: "react-dropdown" }}>
                    <FaChevronDown />
                  </IconContext.Provider>
                </a>
              </Link>
              <div className="dropdown-menu last">
                <Link href="#">
                  <a className="dropdown-item">Notre équipe</a>
                </Link>

                <Link href="#">
                  <a className="dropdown-item">Nos clients</a>
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <a
                target="_blank"
                href="http://bap.sdarchitectes.com"
                rel="noopener noreferrer"
              >
                BAP
              </a>
            </li>
            <li className="nav-item">
              <Link href="/contact" passHref className="nav-links">
                <a className={router.pathname == "/contact" ? "active" : ""}>
                  Contact
                </a>
              </Link>
            </li>
          </ul>
          <div className="nav-icon">
            {click ? (
              <FaTimes onClick={handleClick} />
            ) : (
              <FaBars onClick={handleClick} />
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
