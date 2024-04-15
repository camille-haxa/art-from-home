import PropTypes from "prop-types";
import RoomCard from "./RoomCard";

function RoomList({ nameRoom, imageRoom, listArt }) {
  return (
    <div>
      <RoomCard nameRoom={nameRoom} imageRoom={imageRoom} listArt={listArt} />
    </div>
  );
}
RoomList.propTypes = {
  nameRoom: PropTypes.string.isRequired,
  imageRoom: PropTypes.string.isRequired,
  listArt: PropTypes.arrayOf.isRequired,
};
export default RoomList;
