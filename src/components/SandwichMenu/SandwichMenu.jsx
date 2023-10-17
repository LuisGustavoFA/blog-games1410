import { Link } from 'react-router-dom';
import styles from "./SandwichMenu.module.css";
import { useState } from 'react';

function SandwichMenu() {
  const [active, setActive] = useState(false);

  const handlerButton = () => {
    setActive(!active);
  }

  return (
    <>
      <div className={`${styles.sandwichButton} ${active ? styles.active : ''}`} onClick={handlerButton}></div>  
      <div className={`${styles.sandwich} ${active ? styles.active : ''}`}>
        <ul className={styles.sandwichList}>
          <Link className={styles.sandwichLinks} to={"/"} onClick={handlerButton}>Página Inicial</Link>
          <Link className={styles.sandwichLinks} to={"/news"} onClick={handlerButton}>Notícias</Link>
          <Link className={styles.sandwichLinks} to={"/reviews"} onClick={handlerButton}>Reviews</Link>
          <Link className={styles.sandwichLinks} to={"/lists"} onClick={handlerButton}>Listas</Link>
        </ul>
      </div>
    </>
  )
}

export default SandwichMenu;