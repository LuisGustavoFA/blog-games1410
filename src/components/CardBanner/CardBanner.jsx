import { Link } from 'react-router-dom';
import styles from './CardBanner.module.css';
import { format } from '../../functions/format';

function CardBanner({ data }) {
  const { banner, title, info, tags } = data;

  return (
    <Link className={styles.cardBanner} to={`/${data.itens ? "list" : "article"}/${format(title)}`}>
      <div className={styles.cardBanner_image} style={{ backgroundImage: `url(${banner})` }}>
        <div className={styles.cardBanner_shadow}>
          <span className={styles.cardBanner_title}>{title}</span>
        </div>
      </div>
    </Link>
  )
}

export default CardBanner;