import styles from './TagPage.module.css';
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import CardHorizontal from '../../components/CardHorizontal/CardHorizontal';
import { findByTag } from '../../database/DataApi';
import CardBanner from '../../components/CardBanner/CardBanner';
import AdCase from '../../components/AdCase/AdCase';
import ViewMore from '../../components/ViewMore/ViewMore';
import { getData } from '../../database/DataApi';

function TagPage() {
  const { tag } = useParams();
  const [noticias, setNoticias] = useState([]);
  const [banner, setBanner] = useState([]);
  const [tags, setTags] = useState([]);
  const [data, setData] = useState({});

  useEffect(() => {
    findByTag(tag).then((resp) => {
      setNoticias(resp);
      setBanner(resp[0]);
    })
    window.scrollTo(0, 0);
  }, [tag]);

  const extractTags = (data) => {
    const allTags = data.reduce((tags, item) => {
      tags.push(...item.tags);
      if (item.games) {
        item.games.forEach(game => {
          if (game.tags) {
            tags.push(...game.tags);
          }
        });
      }
      return tags;
    }, []);

    const uniqueTags = [...new Set(allTags)];
    return uniqueTags;
  }

  useEffect(() => {
    getData().then((resp) => {
      const extTags = extractTags(resp);
      setTags(extTags);
      setData(resp);
    });
  }, [tag]);

  const countTag = (tag) => {
    let count = 0;
    for (const item of data) {
      if (item.tags.includes(tag)) count += 1;
    }
    return count;
  }
  
  return (
    <main>
      <div className={styles.banner}>
        <div className={styles.banner_content}>
          <ViewMore currentName={tag} contentArray={tags} linkTo={"/tag/"} icon countFunction={countTag}/>
          {/* <ViewMore currentName={"José"} contentArray={["José", "Henrique", "Luis", "Jonas", "Pedro"]} linkTo={"/"}/> */}
        </div>
      </div>
      <div className={styles.news}>
        <div className={styles.news_main}>
          <CardBanner data={banner} />
          {noticias.map((noticia, id) => {
            return (
              <React.Fragment key={id}>
                {id !== 0 && <CardHorizontal data={noticia} key={id} />}
                {/* {((id - 1) % 3 === 0) && <div className="home-horizontal-ad" alt="Advertisement"></div>} */}
              </React.Fragment>
            );
          })}
        </div>
        <div className={styles.news_secondary}>
          <AdCase/>
          <AdCase/>
          <AdCase/>
          <AdCase/>
        </div>
      </div>
    </main>
  )
}

export default TagPage;