import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import "./Category.scss";

export default function CategoryCard({ image, id, alt }) {
  return (
    <div>
      <NavLink to={`/filterart/${id}`}>
        <img src={image} alt={alt} className="imgCategoryFilter" />
      </NavLink>
    </div>
  );
}

CategoryCard.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
