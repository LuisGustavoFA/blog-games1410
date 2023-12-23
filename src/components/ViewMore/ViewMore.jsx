import React from 'react';
import styles from './ViewMore.module.css';
import { IoGameController } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { format } from '../../functions/format';
import { MdOutlineExpandMore } from "react-icons/md";
import isMobileHandler from '../../components/IsMobileHandler/IsMobileHandler';
import { useState } from 'react';


function ViewMore({ currentName, contentArray, linkTo, icon = false, countFunction = "none"}) {
  const hasCount = countFunction != "none";
  const isMobile = isMobileHandler();
  const [open, setOpen] = useState(false);  

  return (
    <div className={styles.viewMore} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} onClick={() => setOpen(!open)}>
      <div className={styles.viewMore_currentTag}>
        {icon && <IoGameController className={styles.viewMore_currentTag_icon}/>}
        <span className={styles.viewMore_currentTag_span}>{currentName.toUpperCase()}</span>
      </div>
      <span className={styles.viewMore_content}>
        <MdOutlineExpandMore className={styles.viewMore_content_icon} size={isMobile ? 28 : 32} />
        <div className={styles.viewMore_content_open} style={{ height: `${open ? "auto" : "0px"}` }}>
          <div className={styles.viewMore_content_open_tags} style={{ display: `${open ? "flex" : "none"}` }}>
            {contentArray.sort().map((tag) =>
              <Link className={styles.viewMore_content_open_tag} to={`${linkTo}${format(tag)}`}>
                {tag}
                {hasCount && <span className={styles.viewMore_content_open_tagCount}>{countFunction(tag)}</span>}
              </Link>
            )}
          </div>
        </div>
      </span>
    </div>
  )
}

export default ViewMore