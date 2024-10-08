import styles from './ArticlePage.module.css';
// import parse from 'html-react-parser';
import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { findArticle } from '../../database/DataApi';
import TagsCase from '../../components/TagsCase/TagsCase';
import CardList from '../../components/CardList/CardList';
import MoreArticles from '../../components/MoreArticles/MoreArticles';
import { calctime } from '../../functions/calctime';
import { format } from '../../functions/format';
import IsMobileHandler from '../../components/IsMobileHandler/IsMobileHandler';
import FloatImage from '../../components/FloatImage/FloatImage';
import ArticleText from '../../components/ArticleText/ArticleText';

function ArticlePage() {
  const { title } = useParams();
  const [article, setArticle] = useState([]);
  const [games, setGames] = useState([]);
  const [imgOpen, setImgOpen] = useState(false);
  const [img, setImg] = useState('');
  const isMobile = IsMobileHandler();
  
  document.title = article.title;

  useEffect(()=> {
    window.scrollTo(0, 0);
  }, [title]);

  useEffect(() => {
    findArticle(title.replace(/-{2,}/g, ' ').replace(/-/g, " ")).then((resp) => {
      resp.games ? setGames(resp.games) : setGames([]);
      setArticle(resp);
    })
  }, [title])

  const openImage = (img) => {
    if (isMobile) {
      setImg(img);
      setImgOpen(true);
    }
  }

  return (
    <main className={styles.main}>
      <div className={styles.banner_image} onClick={() => openImage(article.banner)} style={{ backgroundImage: `url('${article.banner}')` }}>
        <div className={styles.filter}></div>
      </div>
      <FloatImage image={img} imgOpen={imgOpen} setImgOpen={setImgOpen}/>
      <div className={styles.banner_case}>
        <TagsCase tags={article.tags} />
        <span className={styles.banner_case_title}>{article.title}</span>
        <span className={styles.banner_case_subtitle}>{article.subtitle}</span>
      </div>
      <div className={styles.content}>
        <ArticleText article={article}/>
        {games.map((game, index) => (
          <CardList key={index} game={game} openImage={openImage}/>
        ))}
        <h5 className={styles.content_subtext} >Por <Link className={styles.content_link} to={`/search/${format(article.info?.author)}`}>{article.info?.author}</Link>, {calctime(article.info?.time)}.</h5>
      </div>
      <MoreArticles/>
    </main>
  )
}

export default ArticlePage;