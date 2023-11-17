import { Link } from "react-router-dom";
import "./Header.css";
import SearchBar from "../SearchBar/SearchBar";
import SandwichMenu from "../SandwichMenu/SandwichMenu";
import changeTheme from "../../index";
import { BsMoon, BsMoonFill } from 'react-icons/bs'
import { useState, useEffect } from "react";

function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 650);
  const [darkMode, setDarkMode] = useState(false);

  const handleTheme = () => {
    if (darkMode) {
      changeTheme("white", "black");
    } else changeTheme("black", "white");
    setDarkMode(!darkMode);
  }

  const handleResize = () => {
    setIsMobile(window.innerWidth < 650);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className="header">
      {isMobile ? (
        <ul className="header-mobile">
          <li><SandwichMenu /></li>
          <li><SearchBar id="mobile-search-input" iconSize={35} /></li>
          <div onClick={handleTheme} className="header-mobile-night">
            {(darkMode) ? <BsMoonFill size={32} /> : <BsMoon size={32} />}
          </div>
        </ul>
      ) : (
        <nav>
          <div className="header-logo-case">
            <Link className="header-logo" to={"/home"}>GAMES BLOG</Link>
          </div>

          <ul className="header-pc">
            <li><Link to={"/search/noticia"}>Notícias</Link></li>
            <li><Link to={"/search/review"}>Reviews</Link></li>
            <li><Link to={"/lists"}>Listas</Link></li>
          </ul>

          <SearchBar id="pc-search-input" iconSize={30} />

          <div onClick={handleTheme} className="header-pc-night">
            {(darkMode) ? <BsMoonFill size={30} /> : <BsMoon size={30} />}
          </div>
        </nav>
      )}
    </header>
  )
}

export default Header;