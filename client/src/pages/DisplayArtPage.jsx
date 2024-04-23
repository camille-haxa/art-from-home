import { useLoaderData } from "react-router-dom";

export default function DisplayArtPage() {
  const artsData = useLoaderData();
  return <div>{artsData}</div>;
}
