import React, { useEffect, useRef, useState } from 'react'
import "./ReviewSection.css";
import CardReview from "../CardReview/CardReview";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { getData } from "../../database/DataApi";

function ReviewSection() {
  const [leftArrowActive, setLeftArrowActive] = useState(false);
  const [rightArrowActive, setRightArrowActive] = useState(true);
  const reviewsCardsRef = useRef(null);

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getData('reviews').then((resp) => {
      setReviews(resp);
    })
  }, []);

  const scroll = (dir) => {
    const reviewsCards = reviewsCardsRef.current;
    if (dir === "left") reviewsCards.scrollLeft -= reviewsCards.clientWidth;
    if (dir === "right") reviewsCards.scrollLeft += reviewsCards.clientWidth;
  }

  const handleActivation = () => {
    const reviewsCards = reviewsCardsRef.current;
    const currentScroll = reviewsCards.scrollLeft;
    const maxScroll = reviewsCards.scrollWidth - reviewsCards.clientWidth;

    setLeftArrowActive(currentScroll >= 1);
    setRightArrowActive(currentScroll < maxScroll -1);
  }

  useEffect(()=> {
    const reviewsCards = reviewsCardsRef.current;
    handleActivation();
    reviewsCards.addEventListener("scroll", handleActivation);
    window.addEventListener('resize', handleActivation);
    return () => {
      reviewsCards.removeEventListener("scroll", handleActivation);
      window.removeEventListener('resize', handleActivation);
    };
  }, [])

  return (
    <div className="reviews-case">
      <h2 className="reviews-title">ÚLTIMAS REVIEWS</h2>
      <section className="reviews-cards" ref={reviewsCardsRef}>
        <span className={`reviews-arrows-case-left ${leftArrowActive ? " active" : ""}`} onClick={() => scroll("left")}>
          <FaArrowLeft className='reviews-arrows' size={38}/>
        </span>

        {reviews.map((review) => {
          return <CardReview data={review}/>;
        })}

        <CardReview viewMore/>

        {/* <CardReview title={'Resident Evil 4'} score={'95'} image={'https://cdn.promo.capcomusa.com/boxart/157136.png'}/>
        <CardReview title={'Resident Evil 7'} score={'90'} image={'https://cdn.promo.capcomusa.com/boxart/16073.png'}/>
        <CardReview title={'Devil May Cry 5'} score={'90'} image={'https://cdn.promo.capcomusa.com/boxart/11942.png'}/>
        <CardReview title={'Mafia: Definitive Edition'} score={'80'} image={'https://cdn.2kgames.com/web/mafiagame.com/definitive-edition/buy-03-game-m1.jpg'}/>
        <CardReview title={'KINGDOM HEARTS HD 1.5 + 2.5 ReMIX'} score={'75'} image={'https://www.kingdomhearts.com/img/packaging/hd1525/kingdom-hearts-hd-15-25-packshot.jpg'}/>
        <CardReview title={'Resident Evil 4'} score={'95'} image={'https://cdn.promo.capcomusa.com/boxart/157136.png'}/>
        <CardReview title={'Resident Evil 7'} score={'90'} image={'https://cdn.promo.capcomusa.com/boxart/16073.png'}/>
        <CardReview title={'Devil May Cry 5'} score={'90'} image={'https://cdn.promo.capcomusa.com/boxart/11942.png'}/>
        <CardReview title={'Mafia: Definitive Edition'} score={'80'} image={'https://cdn.2kgames.com/web/mafiagame.com/definitive-edition/buy-03-game-m1.jpg'}/>
        <CardReview title={'KINGDOM HEARTS HD 1.5 + 2.5 ReMIX'} score={'75'} image={'https://www.kingdomhearts.com/img/packaging/hd1525/kingdom-hearts-hd-15-25-packshot.jpg'}/> */}

        <span className={`reviews-arrows-case-right ${rightArrowActive ? " active" : ""}`} onClick={() => scroll("right")}>
          <FaArrowRight className='reviews-arrows' size={38}/>
        </span>  
      </section>
    </div>
  )
}

export default ReviewSection;