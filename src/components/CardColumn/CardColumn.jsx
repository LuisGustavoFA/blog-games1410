import styles from './CardColumn.module.css';
import { Link } from "react-router-dom"

function CardColumn({ data }) {
  const { banner, title, info, tags } = data;
  const title_url = title.replace(/ /g, "-").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

  return (
    <>
      <Link className={styles.card} to={`/article/${title_url}`}>
        <div className={styles.cardImage} alt="banner da notícia" style={{ backgroundImage: `url(${banner})` }}></div>
        <div className={styles.cardData}>
          <span className={styles.cardTags}>
            {tags.map((tag, id) => {
              return (
                <Link className={styles.cardTag} key={id} to={`/search/${tag.replace(/ /g, "-").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()}`}>{tag}</Link>
              )
            })}
          </span>
          <span className={styles.cardTitle}>{title}</span>
          <span className={styles.cardInfo}>
            Por <Link to={`/search/${info.autor.replace(/ /g, "-").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()}`}>{info.autor}</Link>
          </span>
        </div>
      </Link>
    </>
  )
}

export default CardColumn;