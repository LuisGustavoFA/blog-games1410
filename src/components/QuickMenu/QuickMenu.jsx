import { Link } from 'react-router-dom';
import styles from "./QuickMenu.module.css";
import DarkToggle from '../DarkToggle/DarkToggle';

function QuickMenu() {
  return (
    <ul className={styles.quickMenuCase}>
      <Link className={styles.quickMenuLinks} to={"/search/noticia"}>Notícias</Link>
      <Link className={styles.quickMenuLinks} to={"/search/review"}>Reviews</Link>
      <Link className={styles.quickMenuLinks} to={"/search/lista"}>Listas</Link>
      <DarkToggle mobile/>
    </ul>
  )
}

export default QuickMenu;