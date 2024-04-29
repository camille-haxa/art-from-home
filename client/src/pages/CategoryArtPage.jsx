import { useLoaderData, NavLink, useParams } from "react-router-dom";
import { useEffect } from "react";
import CategoryCard from "../components/CategoryCard";
import "../components/Category.scss";

export default function CategoryArtPage() {
  const artData = useLoaderData();
  const { category } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="buttonBack">
        <NavLink to="/">
          <button type="button" className="buttonBackSecond">
            Back
          </button>
        </NavLink>
      </div>
      <h2 className="nameCategory">{category}</h2>
      <div className="categoryFilterPage">
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
    </div>
  );
}
