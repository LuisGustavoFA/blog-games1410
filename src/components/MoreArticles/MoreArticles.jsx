import React, {useEffect, useState} from 'react'
import { useParams } from "react-router-dom";
import styles from './MoreArticles.module.css';
import { getData, findArticle } from "../../database/DataApi";
import CardColumn from "../CardColumn/CardColumn";

function MoreArticles() {

  const { title } = useParams();
  const [noticias, setNoticias] = useState([]);
  const [article, setArticle] = useState([]);

  useEffect(() => {
    findArticle(title.replace(/-/g, " ")).then((resp) => {
      setArticle(resp);
    });
  }, [title]);

  useEffect(() => {
    if (article) {
      getData().then((resp) => {
        const related = resp.filter(item => item.title !== article.title);
        setNoticias(related.slice(0, 3));
      });
    }
  }, [article]);

  return (
    <section className={styles.moreArticles_container}>
      <span className={styles.moreArticles_container_title}>Mais Notícias</span>
      <div className={styles.moreArticles_container_cards}>
        {noticias.map((noticia, id) => {
          return (
            <React.Fragment key={id}>
              <CardColumn data={noticia} key={id} />
            </React.Fragment>
          )
        })}
      </div>
    </section>
  )
}

export default MoreArticles;