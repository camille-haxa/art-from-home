import { NavLink } from "react-router-dom";
import "./LandingPage.scss";

export default function DropdownMenu() {
  return (
    <div>
      <ul className="listDropDown">
        <NavLink to="/filter/Sculptures">
          <li>Sculpture</li>
        </NavLink>
        <NavLink to="/filter/Paintings">
          <li>Paintings</li>
        </NavLink>
        <NavLink to="/filter/Colors">
          <li>Colors</li>
        </NavLink>
        <NavLink to="/filter/Others">
          <li>Others</li>
        </NavLink>
      </ul>
    </div>
  );
}
