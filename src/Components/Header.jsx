import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="" />
      <Link to="/">
        <button>Personnages</button>
      </Link>
      <Link to="/comics">
        <button>Comics</button>
      </Link>

      <button>Favoris</button>
    </header>
  );
};

export default Header;
