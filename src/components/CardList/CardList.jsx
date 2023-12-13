import styles from './CardList.module.css';

function CardList({game}) {
  const {title, banner, text} = game;
  
  return (
    <div>
      <div className={styles.card}>
        <span className={styles.card_title}>{title}</span>
        <div className={styles.card_image} style={{ backgroundImage: `url('${banner}')` }}></div>
        <span className={styles.card_text}>{text}</span>
      </div>
    </div>
  )
}

export default CardList;