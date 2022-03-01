import Link from "next/link";

const Dropdown = ({ closeMenu }) => {
  return (
    <div>
      <ul className="dropdown-menu">
        <li className="dropdown-item">
          <Link href="/agence#team" className="nav-link">
            <a onClick={() => closeMenu()}>Notre équipe</a>
          </Link>
        </li>
        <li className="dropdown-item">
          <Link href="/agence#clients" className="nav-link">
            <a onClick={() => closeMenu()}>Nos clients</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
