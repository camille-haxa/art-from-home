import "./App.scss";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WelcomeCard from "./components/WelcomeCard";

function App() {
  return (
    <>
      <Navbar />

      <Outlet />
      <nav>
        <Navbar />
      </nav>
      <div>
        <WelcomeCard />
      </div>

      <Footer />
    </>
  );
}

export default App;
