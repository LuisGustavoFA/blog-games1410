import React, { useEffect, useState } from "react";
import "./HomePage.css";
import { getData } from "../../database/DataApi";
import CardHorizontal from "../../components/CardHorizontal/CardHorizontal";
import ReviewSection from "../../components/ReviewSection/ReviewSection";
import CardVertical from "../../components/CardVertical/CardVertical";
import BannerSliderNew from "../../components/BannerSliderNew/BannerSliderNew";
import AdCase from '../../components/AdCase/AdCase';

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
      <BannerSliderNew/>
      <ReviewSection/>
      <section className="home-content">
        <section className="home-content-main">
          <h2 className="home-content-title">ÚLTIMAS NOTÍCIAS</h2>
          {noticias.map((noticia, id) => {
            const isReview = noticia.tags.includes("REVIEW");
            if (!isReview) {
              return (
                <React.Fragment key={id}>
                  <CardHorizontal data={noticia} key={id}/>
                  {((id - 1) % 3 === 0) && <AdCase/>}
                </React.Fragment>
              )
            }
          })}
        </section>

        <section className="home-content-secondary">
          <h2 className="home-content-title">ÚLTIMAS LISTAS</h2>
          {lists.map((lists, id) => <CardVertical data={lists} key={id}/>)}
        </section>

      </section>
    </main>
  )
}

export default HomePage