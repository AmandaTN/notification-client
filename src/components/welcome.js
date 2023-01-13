const Welcome = ({ username }) => {


  return (
    <div className="welcome_container">
      <img
        src="https://images.squarespace-cdn.com/content/v1/5e45fd7b05ae4e3f2f2ed60f/1581645908407-OU71JDZN3L0QV38JKDGQ/Resilia_Final_FullColor.jpg"
        alt="Resilia"
      />

      <div className="header__container">
        <h1 className="welcome">Welcome {username}!</h1>
      </div>
    </div>
  );
};

export default Welcome;
