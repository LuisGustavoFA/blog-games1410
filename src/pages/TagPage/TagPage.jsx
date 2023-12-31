import styles from './TagPage.module.css';
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import CardHorizontal from '../../components/CardHorizontal/CardHorizontal';
import { findByTag } from '../../database/DataApi';
import CardBanner from '../../components/CardBanner/CardBanner';
import AdCase from '../../components/AdCase/AdCase';
import ViewMore from '../../components/ViewMore/ViewMore';
import { getData } from '../../database/DataApi';
import { handletags } from '../../functions/handletags';
import PageButtons from "../../components/PageButtons/PageButtons";

function TagPage() {
  const { tag } = useParams();
  const [noticias, setNoticias] = useState([]);
  const [banner, setBanner] = useState([]);
  const [viewMoreTags, setViewMoreTags] = useState([]);
  const [page, setPage] = useState(1);
  const newsPerPage = 6;

  useEffect(() => {
    findByTag(tag).then((resp) => {
      setNoticias(resp);
      setBanner(resp[0]);
    })
    window.scrollTo(0, 0);
  }, [tag]);

  useEffect(() => {
    getData().then((resp) => {
      const formattedTags = handletags(resp);
      setViewMoreTags(formattedTags);
    });
  }, [tag]);
  
  return (
    <main>
      <div className={styles.banner}>
        <div className={styles.banner_content}>
          <ViewMore currentName={tag} contentArray={viewMoreTags} linkTo={"/tag/"} icon ordered />
          {/* <ViewMore currentName={"José"} contentArray={["José", "Henrique", "Luis", "Jonas", "Pedro"]} linkTo={"/"}/> */}
        </div>
      </div>
      <div className={styles.news}>
        <div className={styles.news_main}>
          <CardBanner data={banner}/>
          {noticias.slice(((page - 1) * newsPerPage), (page * newsPerPage)).map((noticia, id) => {
            return (
              <React.Fragment key={id}>
                {id !== 0 && <CardHorizontal data={noticia} key={id}/>}
              </React.Fragment>
            );
          })}
          <PageButtons page={page} setPage={setPage} maxPages={Math.ceil(noticias.length / newsPerPage)}/>
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