import "./App.scss";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <div>
        <Outlet />
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
