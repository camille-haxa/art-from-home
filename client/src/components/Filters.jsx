import { useLoaderData, NavLink } from "react-router-dom";

export default function Filters() {
  const filterData = useLoaderData();

  const uniqueCategories = [];
  for (let i = 0; i < filterData.length; i += 1) {
    if (!uniqueCategories.includes(filterData[i].category)) {
      uniqueCategories.push(filterData[i].category);
    }
  }

  return (
    <div>
      {uniqueCategories?.map((u) => (
        <NavLink to={`/filter/${u}`} key={u}>
          <button type="button">{u}</button>
        </NavLink>
      ))}
    </div>
  );
}
