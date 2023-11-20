import styles from './HeaderMobile.module.css';
import QuickMenu from '../QuickMenu/QuickMenu';
import { BsSearch } from 'react-icons/bs';
import { RxCross1 } from "react-icons/rx";
import { MdMenu } from "react-icons/md";
import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import SearchBarNew from '../SearchBarNew/SearchBarNew';

function HeaderMobile() {
  const [currentSubheader, setCurrentSubheader] = useState(null);
  const location = useLocation();

  const handleSubheader = (subheader) => {
    if (subheader === currentSubheader) {
      setCurrentSubheader(null);
    } else {
      if (currentSubheader === null) {
        setCurrentSubheader(subheader);
      } else {
        setCurrentSubheader(null);
        setTimeout(()=> setCurrentSubheader(subheader), 200);
      }
    }
  }

  useEffect(() => {
    setCurrentSubheader(null);
  }, [location]);

  return (
    <header className={styles.header}>
      <ul className={styles.header_mobile}>
        <li>
          {currentSubheader === 'quickMenu' ?
            <RxCross1 className={styles.header_mobile_buttons} size={32} onClick={() => handleSubheader('quickMenu')}/> :
            <MdMenu className={styles.header_mobile_buttons} size={32} onClick={() => handleSubheader('quickMenu')}/>
          }
        </li>
        <li><Link className={styles.header_mobile_logo} to={"/home"}>GAMES BLOG</Link></li>
        <li>
          {currentSubheader === 'search' ?
            <RxCross1 className={styles.header_mobile_buttons} size={32} onClick={() => handleSubheader('search')}/> :
            <BsSearch className={styles.header_mobile_buttons} size={32} onClick={() => handleSubheader('search')}/>
          }
        </li>
      </ul>
      <div className={`${styles.header_mobile_subheader} ${currentSubheader === 'quickMenu' ? styles.active : ''}`}>
        {currentSubheader === 'quickMenu' ? <QuickMenu/> : ""}
      </div>
      <div className={`${styles.header_mobile_subheader} ${currentSubheader === 'search' ? styles.active : ''}`}>
        {currentSubheader === 'search' ? <SearchBarNew mobile/> : ""}
      </div>
    </header>
  )
}

export default HeaderMobile;