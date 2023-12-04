import styles from './GamesList.module.css';

function GamesList() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.test} style={{ backgroundImage: `url("https://cdn1.epicgames.com/f4a904fcef2447439c35c4e6457f3027/offer/DS_wide-2560x1440-c3d7bbf8ee36dd025610088381a5235a.jpg")` }}>
          <div className={styles.test_filter}></div>
        </div>
        <div className={styles.content}>
          <span className={styles.content_title}>Jogos Mensais Sony</span>
          <div className={styles.content_main}>
            <span className={styles.content_main_text}>abooboraabooboraabooboraaboobora abooboraabooboraabooboraaboobora abooboraabooboraabooboraaboobora</span>
          </div>
        </div>
      </main>
    </>
  )
}

export default GamesList;