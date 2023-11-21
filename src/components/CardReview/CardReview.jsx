import styles from './CardReview.module.css';

function CardReview({image, title, score}) {
  return (
    <div className={styles.cardReview}>
      <div className={styles.cardReview_container}>
        <div className={styles.cardReview_container_image} style={{ backgroundImage: `url('${image}')` }}></div>
        <div className={styles.cardReview_container_score}>{score}</div>
      </div>
      <span className={styles.cardReview_title}>{title}</span>
    </div>
  )
}

export default CardReview;