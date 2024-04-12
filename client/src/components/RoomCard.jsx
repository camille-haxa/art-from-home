import PropTypes from "prop-types";
import "./RoomCardStyle.scss";

function RoomCard({ nameRoom, imageRoom }) {
  return (
    <div>
      <img src={imageRoom} alt={nameRoom} />
      <p>{nameRoom}</p>
    </div>
  );
}

RoomCard.propTypes = {
  nameRoom: PropTypes.string.isRequired,
  imageRoom: PropTypes.string.isRequired,
};

export default RoomCard;
