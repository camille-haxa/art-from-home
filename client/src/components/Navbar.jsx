import "./Navbar.scss";

function Navbar() {
  return (
    <nav className="navbar">
      <img
        className="navbar-logo"
        src="/src/assets/images/logo300.webp"
        alt="logo Art from home"
      />

      <ul className="navbar-links">
        <li className="navbar-item">
          <a href="/" className="navbar-link">
            Accueil
          </a>
        </li>
        <li>
          <a href="/">
            exhibition rooms <span>↓</span>{" "}
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
