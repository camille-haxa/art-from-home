import { useLoaderData } from "react-router-dom";
import RoomCard from "../components/RoomCard";
import "../components/LandingPage.scss";

export default function CollectionPage() {
  const cardData = useLoaderData();

  return (
    <div className="allArt">
      {cardData?.map((a) => (
        <RoomCard key={a.id} name={a.name} image={a.image} id={a.id} />
      ))}
    </div>
  );
}
