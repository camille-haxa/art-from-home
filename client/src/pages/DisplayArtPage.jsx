import { useLoaderData, NavLink } from "react-router-dom";

export default function DisplayArtPage() {
  const displayData = useLoaderData();
  const { name, description, image } = displayData;

  return (
    <div>
      <NavLink to="/">Back</NavLink>

      <h1>{name}</h1>
      <img src={image} alt="" />
      <p>{description}</p>
    </div>
  );
}
