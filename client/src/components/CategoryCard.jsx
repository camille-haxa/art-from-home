import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

export default function CategoryCard({ name, image, id }) {
  return (
    <div>
      <NavLink to={`/art/${id}`}>
        <h3>{name}</h3>
        <img src={image} alt="" />
      </NavLink>
    </div>
  );
}

CategoryCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
