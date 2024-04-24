import { useLoaderData } from "react-router-dom";
import RoomCard from "../components/RoomCard";

export default function CollectionPage() {
  const cardData = useLoaderData();

  return (
    <div>
      {cardData?.map((a) => (
        <RoomCard key={a.id} name={a.name} image={a.image} id={a.id} />
      ))}
    </div>
  );
}
