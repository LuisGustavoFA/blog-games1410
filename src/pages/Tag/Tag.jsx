import styles from './Tag.module.css';
import { IoGameController } from "react-icons/io5";
import { FaPlaystation } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import CardHorizontal from '../../components/CardHorizontal/CardHorizontal';
import { findByTag } from '../../database/DataApi';
import CardBanner from '../../components/CardBanner/CardBanner';
import AdCase from '../../components/AdCase/AdCase';

function Tag() {
  const { tag } = useParams();
  const [noticias, setNoticias] = useState([]);
  const [banner, setBanner] = useState([]);
  const [open, setOpen] = useState(false);
  const [opacity, setOpacity] = useState("0%");

  useEffect(() => {
    findByTag(tag).then((resp) => {
      setNoticias(resp);
      setBanner(resp[0]);
    })
    window.scrollTo(0, 0);
  }, [tag]);

  const openViewMore = () => {
    setOpen(true);
    setTimeout(()=> {
      setOpacity("100%");
    }, 100);
  }

  const closeViewMore = () => {
    setOpen(false);
    setOpacity("0%");
  }

  const handleViewMore = () => {
    if (open) closeViewMore();
    else openViewMore();
  }

  useEffect(()=> {
    const handleScroll = () => closeViewMore();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <main>
      <div className={styles.banner}>
        <div className={styles.banner_content}>
          <div className={styles.banner_title}>
            {tag == 'sony' ? <FaPlaystation className={styles.banner_title_icon} /> : <IoGameController className={styles.banner_title_icon} />}
            <span className={styles.banner_title_span}>{tag.toUpperCase()}</span>
          </div>
          <span className={styles.banner_viewMore} onMouseEnter={()=> openViewMore()} onMouseLeave={()=> closeViewMore()} onClick={()=> handleViewMore()}>
            MAIS TAGS
            <div className={styles.banner_viewMore_content} style={{height: `${open ? "400px" : "0px"}`, border: `${open ? "1px solid #FFF" : "1px solid var(--main-color)"}`}}>
              <div className={styles.banner_viewMore_content_tags} style={{display: `${open ? "flex" : "none"}`, opacity: `${opacity}`}}>
                <h2 className={styles.banner_viewMore_content_tag}>TESTE</h2>
                <h2 className={styles.banner_viewMore_content_tag}>PLAYSTATION</h2>
                <h2 className={styles.banner_viewMore_content_tag}>PC</h2>
                <h2 className={styles.banner_viewMore_content_tag}>MOBILE</h2>
                <h2 className={styles.banner_viewMore_content_tag}>ROCKSTAR</h2>
                <h2 className={styles.banner_viewMore_content_tag}>SONY</h2>
              </div>
            </div>
          </span>
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

export default Tag;