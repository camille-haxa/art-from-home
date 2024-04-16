import RoomList from "./components/RoomList";
import "./App.scss";
import Navbar from "./components/Navbar";
import WelcomeCard from "./components/WelcomeCard";

const listArt = [
  {
    id: 1,
    nameRoom: "Mythology",
    imageRoom: "./src/assets/images/ancient-mythology.jpg",
  },
  {
    id: 2,
    nameRoom: "Japanese Art",
    imageRoom: "./src/assets/images/art-of-japanese.png",
  },
  {
    id: 3,
    nameRoom: "Cats in Art",
    imageRoom: "./src/assets/images/cats-art.jpg",
  },
  {
    id: 4,
    nameRoom: "Potography comtemporary",
    imageRoom: "./src/assets/images/photography-comtemporary.jpg",
  },
  {
    id: 5,
    nameRoom: "Purple room",
    imageRoom: "./src/assets/images/purple_art.jpg",
  },
  {
    id: 6,
    nameRoom: "Claude Monet",
    imageRoom: "./src/assets/images/claude-monet.jpg",
  },
  {
    id: 7,
    nameRoom: "Pink room",
    imageRoom: "./src/assets/images/pink.jpg",
  },
  {
    id: 8,
    nameRoom: "360° view experience",
    imageRoom: "./src/assets/images/view-experience.jpg",
  },
  {
    id: 9,
    nameRoom: "Egyptian metal",
    imageRoom: "./src/assets/images/egyptian-metal.jpg",
  },
  {
    id: 10,
    nameRoom: "Japanese Ceramics",
    imageRoom: "./src/assets/images/ceramics-japanese.jpg",
  },
];

function App() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <div>
        <WelcomeCard />
      </div>
      <div>
        {listArt.map((a) => (
          <RoomList
            listArt={listArt}
            key={a.id}
            nameRoom={a.nameRoom}
            imageRoom={a.imageRoom}
          />
        ))}
      </div>
    </>
  );
}

export default App;
