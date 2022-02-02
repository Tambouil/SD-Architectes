import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IconContext } from "react-icons";
import { useRouter } from "next/router";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import Dropdown from "./Dropdown";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMenu = () => {
    setClick(false);
  };

  const router = useRouter();

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <Link href="/">
            <Image
              onClick={() => closeMenu()}
              src="/img/logo/logo.png"
              alt="SDA Logo"
              width={80}
              height={40}
            />
          </Link>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link href="/" passHref className="nav-links">
                <a
                  onClick={() => closeMenu()}
                  className={router.pathname == "/" ? "active" : ""}
                >
                  Accueil
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/projects-gallery" passHref className="nav-links">
                <a
                  onClick={() => closeMenu()}
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
                <a
                  onClick={() => closeMenu()}
                  className={router.pathname == "/about" ? "active" : ""}
                >
                  Agence
                  <IconContext.Provider value={{ className: "react-dropdown" }}>
                    <FaChevronDown />
                  </IconContext.Provider>
                </a>
              </Link>
              <Dropdown />
            </li>
            <li className="nav-item">
              <a
                onClick={() => closeMenu()}
                target="_blank"
                href="http://bap.sdarchitectes.com"
                rel="noopener noreferrer"
              >
                BAP
              </a>
            </li>
            <li className="nav-item">
              <Link href="/contact" passHref className="nav-links">
                <a
                  onClick={() => closeMenu()}
                  className={router.pathname == "/contact" ? "active" : ""}
                >
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
