import { Link } from "react-router-dom";
import "./Header.css";
import SearchBar from "../SearchBar/SearchBar";
import QuickMenu from "../QuickMenu/QuickMenu";
import { useState, useEffect } from "react";
import DarkToggle from "../DarkToggle/DarkToggle";

function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 650);

  const handleResize = () => {
    const it = setInterval(()=> {
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
        <ul className="header-mobile">
          <li><QuickMenu/></li>
          <li><Link className="header-logo" to={"/home"}>GAMES BLOG</Link></li>
          <li><SearchBar id="mobile-search-input" iconSize={35}/></li>
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

          <SearchBar id="pc-search-input" iconSize={30}/>
          <DarkToggle/>
        </nav>
      )}
    </header>
  )
}

export default Header;