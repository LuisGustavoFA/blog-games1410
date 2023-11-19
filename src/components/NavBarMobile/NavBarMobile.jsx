import styles from './NavBarMobile.module.css';
import QuickMenu from '../QuickMenu/QuickMenu';
import { BsSearch } from 'react-icons/bs';
import { RxCross1 } from "react-icons/rx";
import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import SearchBarNew from '../SearchBarNew/SearchBarNew';

function NavBarMobile() {
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
    <>
      <ul className={styles.header}>
        <li><QuickMenu /></li>
        <li><Link className={styles.header_logo} to={"/home"}>GAMES BLOG</Link></li>
        <li>
          {active ? 
            <RxCross1 className={styles.header_search_button} size={32} onClick={handlerButton} /> :
            <BsSearch className={styles.header_search_button} size={32} onClick={handlerButton} />
          }
          
        </li>
      </ul>
      {active &&
        <div className={styles.header_search_div}>
          <SearchBarNew mobile={true}/>
        </div>
      }
    </>
  )
}

export default NavBarMobile;