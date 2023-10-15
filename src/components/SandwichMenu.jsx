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
      <div className={styles.sandwichButtonContainer}>
        <div className={`${styles.sandwichButton} ${active ? styles.active : ''}`} onClick={handlerButton}></div>
      </div>
      <div className={`${styles.sandwich} ${active ? styles.active : ''}`}>
        <ul className={styles.sandwichList}>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
        </ul>
      </div>
    </>
  )
}

export default SandwichMenu;