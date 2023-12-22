import styles from './Tag.module.css';
import { IoGameController } from "react-icons/io5";
import { FaPlaystation } from "react-icons/fa";
import { Link, useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import CardHorizontal from '../../components/CardHorizontal/CardHorizontal';
import { findByTag, getData } from '../../database/DataApi';
import CardBanner from '../../components/CardBanner/CardBanner';
import AdCase from '../../components/AdCase/AdCase';
import { format } from '../../functions/format';
import { MdOutlineExpandMore } from "react-icons/md";
import isMobileHandler from '../../components/IsMobileHandler/IsMobileHandler';

function Tag() {
  const { tag } = useParams();
  const [noticias, setNoticias] = useState([]);
  const [banner, setBanner] = useState([]);
  const [open, setOpen] = useState(false);
  const [tags, setTags] = useState([]);
  const [data, setData] = useState({});
  const isMobile = isMobileHandler();

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

  useEffect(()=>{
    getData().then((resp)=>{
      const extTags = extractTags(resp);
      setTags(extTags);
      setData(resp);
    });
  }, [tag]);

  const countTag = (tag) => {
    let count = 0;
    for (const item of data) {
      if (item.tags.includes(tag)) count +=1;
    }
    return count;
  }

  const openViewMore = () => {
    setOpen(true);
  }

  const closeViewMore = () => {
    setOpen(false);
  }

  const handleViewMore = () => {
    if (open) closeViewMore();
    else openViewMore();
  }

  return (
    <main>
      <div className={styles.banner}>
        <div className={styles.banner_content}>
          <div className={styles.banner_content_leftHand}>
            <div className={styles.banner_title}>
              {tag == 'sony' ? <FaPlaystation className={styles.banner_title_icon} /> : <IoGameController className={styles.banner_title_icon} />}
              <span className={styles.banner_title_span}>{tag.toUpperCase()}</span>
            </div>
            <span className={styles.banner_viewMore} onMouseLeave={()=> closeViewMore()} onClick={()=> handleViewMore()}>
              <MdOutlineExpandMore className={styles.banner_viewMore_icon} size={isMobile ? 28 : 32} onMouseEnter={()=> openViewMore()}/>
              <div className={styles.banner_viewMore_content} style={{height: `${open ? "auto" : "0px"}`}}>
                <div className={styles.banner_viewMore_content_tags} style={{display: `${open ? "flex" : "none"}`}}>
                  {tags.sort().map((tag)=>
                    <Link className={styles.banner_viewMore_content_tag} to={`/tag/${format(tag)}`}>
                      {tag}
                      <span className={styles.banner_viewMore_content_tagCount}>{countTag(tag)}</span>
                    </Link>
                  )}
                </div>
              </div>
            </span>
          </div>
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