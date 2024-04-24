import { useLoaderData } from "react-router-dom";

export default function DisplayArtPage() {
  const artsData = useLoaderData();
  const { name, description, image } = artsData;

  return (
    <div>
      <h1>{name}</h1>
      <img src={image} alt="" />
      <p>{description}</p>
    </div>
  );
}
