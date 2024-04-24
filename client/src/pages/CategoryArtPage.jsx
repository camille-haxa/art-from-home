import { useLoaderData, NavLink } from "react-router-dom";
import CategoryCard from "../components/CategoryCard";

export default function CategoryArtPage() {
  const artData = useLoaderData();

  return (
    <div>
      <NavLink to="/">Back</NavLink>
      {artData?.map((a) => (
        <CategoryCard
          key={a.id}
          name={a.name}
          image={a.image}
          category={a.category}
          id={a.id}
        />
      ))}
    </div>
  );
}
