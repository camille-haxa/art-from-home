import nightsky from "../assets/images/nightsky.jpg"
import "./LandingPage.scss";

function WelcomeCard() {
  return (
    <>
      <img
        className="welcomeImage"
        src={nightsky}
        alt=""
      />
      <img
        className="welcomeLogo"
        src="/src/assets/images/logo600.png"
        alt=""
      />
      <p className="description">
        View art from anywhere, everywhere, you can browse the art on display
        and click on the images to view them in details and learn more about the
        selected artworks, you can also use the filters to browse through the
        different categories.
      </p>
    </>
  );
}

export default WelcomeCard;
