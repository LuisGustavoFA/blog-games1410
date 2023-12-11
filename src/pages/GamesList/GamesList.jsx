import styles from './GamesList.module.css';
import parse from 'html-react-parser';
import YouTube from 'react-youtube';
import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { findArticle } from '../../database/DataApi';
import TagsCase from '../../components/TagsCase/TagsCase';
import CardList from '../../components/CardList/CardList';
import MoreArticles from '../../components/MoreArticles/MoreArticles';
import { calctime } from '../../functions/calctime';
import { format } from '../../functions/format';
import { Tweet } from 'react-tweet';

function GamesList() {
  window.scrollTo(0, 0);

  const { title } = useParams();
  const [article, setArticle] = useState([]);
  const [games, setGames] = useState([]);
  const [articleText, setArticleText] = useState('');
  const [postIncluded, setPostIncluded] = useState(false);
  const [videoIncluded, setVideoIncluded] = useState(false);

  document.title = article.title;

  useEffect(() => {
    findArticle(title.replace(/-{2,}/g, ' ').replace(/-/g, " ")).then((resp) => {
      resp.games ? setGames(resp.games) : setGames([]);
      setArticle(resp);
    })
  }, [title])

  useEffect(() => {
    const post = article.social?.post;
    const video = article.social?.video;

    if (post && article.text.includes('[socialPost]')) {
      setPostIncluded(true);
    }

    if (video && article.text.includes('[socialVideo]')) {
      setVideoIncluded(true);
    }

    setArticleText(article.text);
    console.log(articleText);

  }, [article]);

  const renderContent = () => {
    if (!postIncluded && !videoIncluded) {
      return articleText;

    } else if (postIncluded && videoIncluded) {
      let test = articleText.split('[socialPost]').map((part, index, array) => (
        <React.Fragment key={index}>
          {part}
          {index !== array.length - 1 && <Tweet id={article.social?.post} />}
        </React.Fragment>
      ));

      let test2 = test[1].props.children[0].split('[socialVideo]').map((part, index, array) => (
        <React.Fragment key={index}>
          {part}
          {index !== array.length - 1 && <YouTube style={{paddingTop: "16px"}} videoId={article.social?.video} />}
        </React.Fragment>
      ));

      let test3 = test.splice(0,1).concat(test2);

      return test3;

    } else if (postIncluded) {
      let test = articleText.split('[socialPost]').map((part, index, array) => (
        <React.Fragment key={index}>
          {part}
          {index !== array.length - 1 && <Tweet id={article.social?.post} />}
        </React.Fragment>
      ));

      return test;

    } else if (videoIncluded) {
      let test = articleText.split('[socialVideo]').map((part, index, array) => (
        <React.Fragment key={index}>
          {part}
          {index !== array.length - 1 && <YouTube style={{paddingTop: "16px"}} videoId={article.social?.video} />}
        </React.Fragment>
      ));

      return test;
    }
    
  };

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
        <span className={styles.content_text}>
          {renderContent()}
        </span>
        {games.map((game, index) => (
          <CardList key={index} game={game} />
        ))}
        <h5 className={styles.content_subtext} >Por <Link className={styles.content_link} to={`/search/${format(article.info?.autor)}`}>{article.info?.autor}</Link>, {calctime(article.info?.time)}.</h5>
      </div>
      <MoreArticles />
    </main>
  )
}

export default GamesList;