import { useNavigate } from 'react-router-dom';
import styles from './CardReview.module.css';
import { format } from '../../functions/format';

function CardReview({data}) {
  const navigate = useNavigate();

  return (
    <div className={styles.cardReview} onClick={() => navigate(`/article/${format(data.title)}`)}>
      <div className={styles.cardReview_container}>
        <div className={styles.cardReview_container_image} style={{ backgroundImage: `url('${data.banner}')` }}></div>
        <div className={styles.cardReview_container_score}>{"86"}</div>
      </div>
      <span className={styles.cardReview_title}>{data.title}</span>
    </div>
  )
}

export default CardReview;