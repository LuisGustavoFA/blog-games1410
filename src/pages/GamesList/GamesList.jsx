import styles from './GamesList.module.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { findArticle } from '../../database/DataApi';
import TagsCase from '../../components/TagsCase/TagsCase';
import CardList from '../../components/CardList/CardList';
import MoreArticles from '../../components/MoreArticles/MoreArticles';

function GamesList() {
  window.scrollTo(0, 0);

  const { title } = useParams();
  const [article, setArticle] = useState([]);
  const [games, setGames] = useState([]);

  document.title = article.title;

  useEffect(() => {
    findArticle(title.replace(/-{2,}/g, ' ').replace(/-/g, " ")).then((resp) => {
      setArticle(resp);
      resp.games ? setGames(resp.games) : setGames([]);
    })
  }, [title])

  return (
    <main className={styles.main}>
      <div className={styles.banner_image} style={{ backgroundImage: `url('${article.banner}')` }}>
        <div className={styles.filter}></div>
      </div>
      <div className={styles.banner_case}>
        <TagsCase tags={article.tags} />
        <span className={styles.banner_case_title}>{article.title}</span>
        <span className={styles.banner_case_subtitle}>{article.subtitle}</span>
      </div>
      <div className={styles.content}>
        <span className={styles.content_text}>{article.text}</span>
        {games.map((game, index) => (
          <CardList key={index} game={game} />
        ))}
      </div>
      <MoreArticles/>
    </main>
  )
}

export default GamesList;