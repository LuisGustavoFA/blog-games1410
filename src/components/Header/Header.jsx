import React from 'react'
import { Link } from "react-router-dom";
import style from './Header.module.css';
import SearchBarNew from "../SearchBarNew/SearchBarNew";
import DarkToggle from "../DarkToggle/DarkToggle";
import { scrollTop } from '../../functions/scrolltop';

function Header() {
  return (
    <header className={style.header}>
      <nav>
        <div className={style.header_logo_case}>
          <Link className={style.header_logo} to={"/home"} onClick={scrollTop} >GAMES BLOG</Link>
        </div>

        <ul className={style.header_pc}>
          <li><Link to={"/search/noticia"}>Notícias</Link></li>
          <li><Link to={"/search/review"}>Reviews</Link></li>
          <li><Link to={"/search/lista"}>Listas</Link></li>
        </ul>

        <SearchBarNew id="pc_search_input" iconSize={30} />
        <DarkToggle />
      </nav>
    </header>
  );
}

export default Header;