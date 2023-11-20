import styles from './HeaderMobile.module.css';
import QuickMenu from '../QuickMenu/QuickMenu';
import { BsSearch } from 'react-icons/bs';
import { RxCross1 } from "react-icons/rx";
import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import SearchBarNew from '../SearchBarNew/SearchBarNew';

function HeaderMobile() {
  const [active, setActive] = useState(false);
  const location = useLocation();

  const handlerButton = () => {
    setActive(!active);
  }

  useEffect(() => {
    if (active) {
      setActive(false);
    }
  }, [location]);

  return (
    <header className={styles.header}>
      <ul className={styles.header_mobile}>
        <li><QuickMenu /></li>
        <li><Link className={styles.header_mobile_logo} to={"/home"}>GAMES BLOG</Link></li>
        <li>
          {active ? 
            <RxCross1 className={styles.header_mobile_search_button} size={32} onClick={handlerButton}/> :
            <BsSearch className={styles.header_mobile_search_button} size={32} onClick={handlerButton}/>
          }
          
        </li>
      </ul>
      <div className={`${styles.header_mobile_search_div} ${active ? styles.active : ''}`}>
        {active ? <SearchBarNew mobile/> : ""}
      </div>
    </header>
  )
}

export default HeaderMobile;