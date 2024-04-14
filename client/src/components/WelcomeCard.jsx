import "./WelcomeCard.scss";

function WelcomeCard() {
  return (
    <>
      <img
        className="welcomeImage"
        src="/src/assets/images/nightsky.jpg"
        alt=""
      />
      <img
        className="welcomeLogo"
        src="/src/assets/images/logo600.png"
        alt=""
      />
      <p className="description">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque earum
        suscipit numquam mollitia fugit voluptatum, facere impedit incidunt
        deserunt?
      </p>
    </>
  );
}

export default WelcomeCard;
