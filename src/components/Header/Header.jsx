import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import SearchBarNew from "../SearchBarNew/SearchBarNew";
import { useState, useEffect } from "react";
import DarkToggle from "../DarkToggle/DarkToggle";
import NavBarMobile from "../NavBarMobile/NavBarMobile";

function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 650);

  const handleResize = () => {
    const it = setInterval(() => {
      setIsMobile(window.innerWidth < 650);
      clearInterval(it);
    }, 100);
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
        <NavBarMobile/>
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

          <SearchBarNew id="pc-search-input" iconSize={30} />
          <DarkToggle />
        </nav>
      )}
    </header>
  )
}

export default Header;