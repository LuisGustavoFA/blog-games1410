import React from 'react'
import "./ReviewSection.css";
import CardReview from "../CardReview/CardReview";

function ReviewSection() {
  return (
    <div className="reviews-case">
      <h2 className="reviews-title">Reviews mais recentes:</h2>
      <section className="reviews-cards">
        <CardReview title={'Resident Evil 4'} score={'95'} image={'https://cdn.promo.capcomusa.com/boxart/157136.png'}/>
        <CardReview title={'Resident Evil 7'} score={'90'} image={'https://cdn.promo.capcomusa.com/boxart/16073.png'}/>
        <CardReview title={'Devil May Cry 5'} score={'90'} image={'https://cdn.promo.capcomusa.com/boxart/11942.png'}/>
        <CardReview title={'Mafia: Definitive Edition'} score={'80'} image={'https://cdn.2kgames.com/web/mafiagame.com/definitive-edition/buy-03-game-m1.jpg'}/>
        <CardReview title={'KINGDOM HEARTS HD 1.5 + 2.5 ReMIX'} score={'75'} image={'https://www.kingdomhearts.com/img/packaging/hd1525/kingdom-hearts-hd-15-25-packshot.jpg'}/>
        <CardReview title={'KINGDOM HEARTS HD 1.5 + 2.5 ReMIX'} score={'75'} image={'https://www.kingdomhearts.com/img/packaging/hd1525/kingdom-hearts-hd-15-25-packshot.jpg'}/>
        <CardReview title={'KINGDOM HEARTS HD 1.5 + 2.5 ReMIX'} score={'75'} image={'https://www.kingdomhearts.com/img/packaging/hd1525/kingdom-hearts-hd-15-25-packshot.jpg'}/>
        <CardReview title={'KINGDOM HEARTS HD 1.5 + 2.5 ReMIX'} score={'75'} image={'https://www.kingdomhearts.com/img/packaging/hd1525/kingdom-hearts-hd-15-25-packshot.jpg'}/>
        <CardReview title={'KINGDOM HEARTS HD 1.5 + 2.5 ReMIX'} score={'75'} image={'https://www.kingdomhearts.com/img/packaging/hd1525/kingdom-hearts-hd-15-25-packshot.jpg'}/>
      </section>
    </div>
  )
}

export default ReviewSection