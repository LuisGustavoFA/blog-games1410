import styles from './CardList.module.css';
import IsMobileHandler from '../IsMobileHandler/IsMobileHandler';

function CardList({ game, setImg, isOpen, setImgOpen }) {
  const { title, banner, text } = game;
  const isMobile = IsMobileHandler();

  return (
    <div>
      <div className={styles.card}>
        <span className={styles.card_title}>{title}</span>
        <div className={styles.card_image}
          onClick={() => { setImg(banner); if (isMobile) { setImgOpen(!isOpen); } }}
          style={{ backgroundImage: `url('${banner}')` }}></div>
        <span className={styles.card_text}>{text}</span>
      </div>
    </div>
  )
}

export default CardList;