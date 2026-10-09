import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/profile/collectionPage">Collection</Link>
      <Link to="/profile">Profile</Link>
    </>
  );
};

export default NavBar;
