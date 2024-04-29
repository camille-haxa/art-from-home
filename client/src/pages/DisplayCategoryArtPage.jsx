import { useLoaderData, NavLink } from "react-router-dom";
import { useEffect } from "react";
import "./DisplayArtPageCss.scss";

export default function DisplayCategoryArtPage() {
  const displayData = useLoaderData();
  const { name, description, image, category, alt } = displayData;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="buttonBack">
        <NavLink to={`/filter/${category}`}>
          <button type="button" className="buttonBackSecond">
            Back
          </button>
        </NavLink>
      </div>
      <div className="pageDisplayArt">
        <img src={image} alt={alt} className="displayArtImg" />
        <h4 className="displayArtName">{name}</h4>
        <p className="displayArtDescription">{description}</p>
      </div>
    </div>
  );
}
