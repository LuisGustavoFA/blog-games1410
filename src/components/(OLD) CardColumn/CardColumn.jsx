import styles from './CardColumn.module.css';
import TagsCase from '../TagsCase/TagsCase';
import { Link } from "react-router-dom"
import { format } from '../../functions/format';
import { calctime } from '../../functions/calctime';

function CardColumn({ data }) {
  const { banner, title, info, tags } = data;
  const title_url = format(title);

  return (
    <>
      <Link className={styles.card} to={`/article/${title_url}`}>
        <div className={styles.cardImage} alt="banner da notícia" style={{ backgroundImage: `url(${banner})` }}></div>
        <div className={styles.cardData}>
          <TagsCase tags={tags}/>
          <span className={styles.cardTitle}>{title}</span>
          <span className={styles.cardInfo}>
            Por <Link to={`/search/${format(info.autor)}`}>{info.autor}</Link>, {calctime(info.time)}
          </span>
        </div>
      </Link>
    </>
  )
}

export default CardColumn;