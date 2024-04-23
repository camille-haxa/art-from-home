import { useLoaderData } from "react-router-dom";
import RoomCard from "../components/RoomCard";

export default function CollectionPage() {
  const artData = useLoaderData();

  return (
    <div>
      {artData?.map((a) => (
        <RoomCard key={a.id} name={a.name} image={a.image} />
      ))}
    </div>
  );
}
