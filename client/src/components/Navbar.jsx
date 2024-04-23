import "./Navbar.scss";

function Navbar() {
  return (
    <nav className="navbar">
      <img
        className="navbarLogo"
        src="/src/assets/images/logop2.png"
        alt="logo Art from home"
      />

      <ul className="navbarList">
        <li className="navbar-item">
          <a href="/" className="navbarLink">
            Accueil
          </a>
        </li>
        <li>
          <a href="/">
            exhibition rooms <span className="arrow">↓</span>{" "}
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
