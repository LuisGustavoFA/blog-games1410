import React, {useEffect, useState} from 'react'
import { useParams } from "react-router-dom";
import styles from './MoreArticles.module.css';
import { getData, findArticle } from "../../database/DataApi";
import CardVertical from '../CardVertical/CardVertical';

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
      getData('news').then((resp) => {
        const related = resp.filter(item => item.title !== article.title);
        setNoticias(related.slice(0, 3));
      });
    }
  }, [article]);

  return (
    <section className={styles.moreArticles_container}>
      <h2 className={styles.moreArticles_container_title}>MAIS ARTIGOS</h2>
      <div className={styles.moreArticles_container_cards}>
        {noticias.map((noticia, id) => {
          return (
            <React.Fragment key={id}>
              <CardVertical data={noticia} key={id} hasBanner/>
            </React.Fragment>
          )
        })}
      </div>
    </section>
  )
}

export default MoreArticles;