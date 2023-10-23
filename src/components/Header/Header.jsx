import { Link } from "react-router-dom";
import "./Header.css";
import SearchBar from "../SearchBar/SearchBar";
import SandwichMenu from "../SandwichMenu/SandwichMenu";
import changeTheme from "../../index";
import { BsMoon, BsMoonFill } from 'react-icons/bs'
import { useState } from "react";

function Header() {

  const [darkMode, setDarkMode] = useState(false);
  const handleTheme = () => {
    if (darkMode) {
      changeTheme("white", "black");
    } else changeTheme("black", "white");
    setDarkMode(!darkMode);
  }

  return (
    <header className="header">
      <nav>
        <ul className="header-pc">
          <li><Link to={"/home"}>Página Inicial</Link></li>
          <li><Link to={"/news"}>Notícias</Link></li>
          <li><Link to={"/reviews"}>Reviews</Link></li>
          <li><Link to={"/lists"}>Listas</Link></li>
          <li><SearchBar id="pc-search-input" iconSize={25} /></li>
          <div onClick={handleTheme} className="header-pc-night">
            {(darkMode) ? <BsMoonFill size={25} /> : <BsMoon size={25} />}
          </div>
        </ul>
        <ul className="header-mobile">
          <li><SandwichMenu/></li>
          <li><SearchBar id="mobile-search-input" iconSize={35} /></li>
          <div onClick={handleTheme} className="header-mobile-night">
            {(darkMode) ? <BsMoonFill size={32} /> : <BsMoon size={32} />}
          </div>
        </ul>
      </nav>
    </header>
  )
}

export default Header;