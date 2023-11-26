import React, { useEffect, useState } from "react";
import "./HomePage.css";
import { getData, getListData } from "../../../database/DataApi";
import Card from "../../Card/Card";
import ListCard from "../../ListCard/ListCard";
import BannerSlider from "../../BannerSlider/BannerSlider";
import ReviewSection from "../../ReviewSection/ReviewSection";

function HomePage() {
  window.scrollTo(0, 0);
  document.title = "Blog";
  const [noticias, setNoticias] = useState([]);
  const [lists, setLists] = useState([]);

  useEffect(() => {
    getData('news').then((resp) => {
      setNoticias(resp);
    })
  }, []);

  useEffect(() => {
    getData('lists').then((resp) => {
      setLists(resp);
    })
  }, []);

  return (
    <main className="home">
      <BannerSlider/>
      <ReviewSection/>
      <section className="home-content">
        <section className="home-content-main">
          <h2 className="home-content-title">ÚLTIMAS NOTÍCIAS</h2>
          {noticias.map((noticia, id) => {
            const isReview = noticia.tags.includes("REVIEW");
            if (!isReview) {
              return (
                <React.Fragment key={id}>
                  <Card data={noticia} key={id}/>
                  {((id - 1) % 3 === 0) && <div className="home-horizontal-ad" alt="Advertisement"></div>}
                </React.Fragment>
              )
            }
          })}
        </section>

        <section className="home-content-secondary">
          <h2 className="home-content-title">ÚLTIMAS LISTAS</h2>
          <ListCard lists={lists}/>
        </section>

      </section>
    </main>
  )
}

export default HomePage