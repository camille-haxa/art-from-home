import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import "./LandingPage.scss";

function RoomCard({ image, id, alt }) {
  return (
    <div className="uniqueArt">
      <NavLink to={`/art/${id}`}>
        <img src={image} alt={alt} className="imgArt" />
      </NavLink>
    </div>
  );
}

RoomCard.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default RoomCard;
