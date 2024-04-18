import "./App.scss";
import Navbar from "./components/Navbar";
import WelcomeCard from "./components/WelcomeCard";
import Footer from "./components/Footer";

function App() {
  return (
    <>
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
