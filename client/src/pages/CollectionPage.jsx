import { useLoaderData } from "react-router-dom";
import RoomCard from "../components/RoomCard";

export default function CollectionPage() {
  const listArts = useLoaderData();
  return (
    <>
      {listArts.map((a) => (
        <RoomCard data={a} key={a.id} name={a.nameRoom} image={a.imageRoom} />
      ))}
    </>
  );
}
