import { Link, useLocation } from 'react-router-dom';
import styles from "./QuickMenu.module.css";
import { useState, useEffect } from 'react';
import DarkToggle from '../DarkToggle/DarkToggle';

function QuickMenu() {
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
      <div className={`${styles.sandwichButton} ${active ? styles.active : ''}`} onClick={handlerButton}></div>  
      <div className={`${styles.sandwich} ${active ? styles.active : ''}`}>
        <ul className={`${styles.sandwichList} ${active ? styles.active : ''}`}>
          <Link className={styles.sandwichLinks} to={"/search/noticia"}>Notícias</Link>
          <Link className={styles.sandwichLinks} to={"/search/review"}>Reviews</Link>
          <Link className={styles.sandwichLinks} to={"/lists"}>Listas</Link>
          <DarkToggle mobile/>
        </ul>
      </div>
    </>
  )
}

export default QuickMenu;