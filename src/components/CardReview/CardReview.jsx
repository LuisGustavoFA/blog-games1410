import { useNavigate } from 'react-router-dom';
import styles from './CardReview.module.css';
import { format } from '../../functions/format';
import { CiSquarePlus } from "react-icons/ci";

function CardReview({data, viewMore = false}) {
  const isViewMore = viewMore;
  const navigate = useNavigate();


  return (
    <>
      {isViewMore ? (
        <div className={styles.cardReview} onClick={() => navigate("/search/review")}>
          <div className={styles.cardReview_container}>
            <CiSquarePlus className={styles.cardReview_container_icon}/>
          </div>
        <span className={styles.cardReview_title}>VER MAIS</span>
      </div>
      ) : (
        <div className={styles.cardReview} onClick={() => navigate(`/article/${format(data.title)}`)}>
          <div className={styles.cardReview_container}>
            <div className={styles.cardReview_container_image} style={{ backgroundImage: `url('${data.banner}')` }}></div>
            <div className={styles.cardReview_container_score}>{"86"}</div>
          </div>
          <span className={styles.cardReview_title}>{data.title}</span>
        </div>
      )}
    </>
  )
}

export default CardReview;