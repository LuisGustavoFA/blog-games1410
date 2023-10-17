import { Link } from "react-router-dom";
import "./Header.css";
import SearchBar from "../SearchBar/SearchBar";
import SandwichMenu from "../SandwichMenu/SandwichMenu";

function Header() {
  return (
    <header className="header">
      <nav>
        <ul className="pc">
          <li><Link to={"/"}>Página Inicial</Link></li>
          <li><Link to={"/news"}>Notícias</Link></li>
          <li><Link to={"/reviews"}>Reviews</Link></li>
          <li><Link to={"/lists"}>Listas</Link></li>
          <li><SearchBar id="pc-search-input"/></li>
        </ul>
        <ul className="mobile">
          <li><SandwichMenu/></li>
          <li><SearchBar id="mobile-search-input"/></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;