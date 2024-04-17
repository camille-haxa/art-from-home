import PropTypes from "prop-types";
import "./RoomCardStyle.scss";

function RoomCard({ nameRoom, imageRoom }) {
  return (
    <div className="roomList">
      <img src={imageRoom} alt={nameRoom} className="imgRoom" />
      <p className="nameRoom">{nameRoom}</p>
    </div>
  );
}

RoomCard.propTypes = {
  nameRoom: PropTypes.string.isRequired,
  imageRoom: PropTypes.string.isRequired,
};

export default RoomCard;
