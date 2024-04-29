import CollectionPage from "../pages/CollectionPage";
import Filters from "./Filters";
import WelcomeCard from "./WelcomeCard";

function Home() {
  return (
    <div>
      <WelcomeCard />
      <Filters />
      <CollectionPage />
    </div>
  );
}

export default Home;
