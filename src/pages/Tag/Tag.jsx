import styles from './Tag.module.css';
import { IoGameController } from "react-icons/io5";
import { FaPlaystation } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import CardHorizontal from '../../components/CardHorizontal/CardHorizontal';
import { findByTag } from '../../database/DataApi';
import CardBanner from '../../components/CardBanner/CardBanner';

function Tag() {
  window.scrollTo(0, 0);

  const { tag } = useParams();

  const [noticias, setNoticias] = useState([]);
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    findByTag(tag).then((resp) => {
      setNoticias(resp);
      setBanner(resp[0]);
    })
  }, [tag]);

  return (
    <main>
      <div className={styles.banner}>
        <div className={styles.banner_title}>
          {tag == 'sony' ? <FaPlaystation className={styles.banner_title_icon} /> : <IoGameController className={styles.banner_title_icon} />}
          <span className={styles.banner_title_span}>{tag.toUpperCase()}</span>
        </div>
      </div>
      <div className={styles.news}>
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
    </main>
  )
}

export default Tag;