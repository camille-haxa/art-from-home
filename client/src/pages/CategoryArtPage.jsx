import { useLoaderData } from "react-router-dom";
import CategoryCard from "../components/CategoryCard";

export default function CategoryArtPage() {
  const artData = useLoaderData();

  return (
    <div>
      {artData?.map((a) => (
        <CategoryCard
          key={a.id}
          name={a.name}
          image={a.image}
          category={a.category}
        />
      ))}
    </div>
  );
}
