import React from "react";
import Link from "next/link";
const Dropdown = () => {
  return (
    <div>
      <ul className="dropdown-menu">
        <li className="dropdown-item">
          <Link href="#" className="nav-link">
            <a>Notre équipe</a>
          </Link>
        </li>
        <li className="dropdown-item">
          <Link href="#" className="nav-link">
            <a>Nos clients</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
