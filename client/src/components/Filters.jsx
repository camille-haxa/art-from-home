import { useLoaderData, NavLink } from "react-router-dom";
import "./LandingPage.scss";

export default function Filters() {
  const filterData = useLoaderData();

  const uniqueCategories = [];
  for (let i = 0; i < filterData.length; i += 1) {
    if (!uniqueCategories.includes(filterData[i].category)) {
      uniqueCategories.push(filterData[i].category);
    }
  }

  return (
    <div className="buttonFilterAll">
      {uniqueCategories?.map((u) => (
        <NavLink to={`/filter/${u}`} key={u}>
          <button type="button" className="buttonFilter">
            {u}
          </button>
        </NavLink>
      ))}
    </div>
  );
}
