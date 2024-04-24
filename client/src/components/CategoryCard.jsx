import PropTypes from "prop-types";

export default function CategoryCard({ name, image, category }) {
  return (
    <div>
      <p>{category}</p>
      <h3>{name}</h3>
      <img src={image} alt="" />
    </div>
  );
}

CategoryCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
