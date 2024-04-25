import { NavLink } from "react-router-dom";
import "./Navbar.scss";

export default function DropdownMenu() {
  return (
    <div>
      <ul>
        <NavLink to="/filter/sculptures">
          <li>Sculpture</li>
        </NavLink>
        <NavLink to="/filter/paintings">
          <li>Paintings</li>
        </NavLink>
        <NavLink to="/filter/colors">
          <li>Colors</li>
        </NavLink>
        <NavLink to="/filter/others">
          <li>Others</li>
        </NavLink>
      </ul>
    </div>
  );
}
