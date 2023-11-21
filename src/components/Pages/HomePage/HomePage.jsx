import React, { useEffect, useState } from "react";
import "./HomePage.css";
import { getData, getListData } from "../../../database/DataApi";
import Card from "../../Card/Card";
import ListCard from "../../ListCard/ListCard";
import BannerSlider from "../../BannerSlider/BannerSlider";
import CardReview from "../../CardReview/CardReview";

function HomePage() {
  window.scrollTo(0, 0);
  document.title = "Blog";
  const [noticias, setNoticias] = useState([]);
  const [lists, setLists] = useState([]);

  useEffect(() => {
    getData().then((resp) => {
      setNoticias(resp);
    })
  }, []);

  useEffect(() => {
    getListData().then((resp) => {
      setLists(resp);
    })
  }, []);

  return (
    <main className="home">
      <BannerSlider/>
      <section className="home-reviews">
        <CardReview title={'Resident Evil 4'} score={'95'} image={'https://cdn.promo.capcomusa.com/boxart/157136.png'}/>
        <CardReview title={'Resident Evil 7'} score={'90'} image={'https://cdn.promo.capcomusa.com/boxart/16073.png'}/>
        <CardReview title={'Devil May Cry 5'} score={'90'} image={'https://cdn.promo.capcomusa.com/boxart/11942.png'}/>
        <CardReview title={'Mafia: Definitive Edition'} score={'80'} image={'https://cdn.2kgames.com/web/mafiagame.com/definitive-edition/buy-03-game-m1.jpg'}/>
        <CardReview title={'KINGDOM HEARTS HD 1.5 + 2.5 ReMIX'} score={'75'} image={'https://www.kingdomhearts.com/img/packaging/hd1525/kingdom-hearts-hd-15-25-packshot.jpg'}/>
      </section>
      <section className="home-content">
        <section className="home-content-main">
          {noticias.map((noticia, id) => {
            return (
              <React.Fragment key={id}>
                <Card data={noticia} key={id}/>
                {((id - 1) % 3 === 0) && <div className="home-horizontal-ad" alt="Advertisement"></div>}
              </React.Fragment>
            )
          })}
        </section>

        <section className="home-content-secondary">
          <ListCard lists={lists}/>
        </section>

      </section>
    </main>
  )
}

export default HomePage