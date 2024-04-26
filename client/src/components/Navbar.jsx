import { useState } from "react";
import DropdownMenu from "./DropdownMenu";
import "./Navbar.scss";

function Navbar() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleClick = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <nav className="navbar">
      <a href="/">
        <img
          className="navbarLogo"
          src="/src/assets/images/logop2.png"
          alt="logo Art from home"
        />
      </a>

      <ul className="navbarList">
        <li className="navbar-item">
          <a href="/" className="navbarLink">
            Accueil
          </a>
        </li>
        <li>
          <button
            type="button"
            onClick={handleClick}
            onKeyDown={handleClick}
            onMouseLeave={handleMouseLeave}
            className="dropDown"
          >
            Category
          </button>
          {isDropdownVisible && <DropdownMenu />}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
