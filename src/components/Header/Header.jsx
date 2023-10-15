import { Link } from "react-router-dom";
import "./Header.css";
import SearchBar from "../SearchBar/SearchBar";

function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/news"}>Noticias</Link></li>
          <li><Link to={"/reviews"}>Reviews</Link></li>
          <li><Link to={"/lists"}>Listas</Link></li>
          <li><SearchBar/></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;