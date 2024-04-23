import PropTypes from "prop-types";

function RoomCard({ image, name }) {
  return (
    <div>
      <p>{name}</p>
      <img src={image} alt="Oeuvre d'art" />
    </div>
  );
}

RoomCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default RoomCard;
