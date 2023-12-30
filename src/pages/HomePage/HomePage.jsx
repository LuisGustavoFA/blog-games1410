import React, { useEffect, useState } from "react";
import "./HomePage.css";
import { getData } from "../../database/DataApi";
import CardHorizontal from "../../components/CardHorizontal/CardHorizontal";
import ReviewSection from "../../components/ReviewSection/ReviewSection";
import CardVertical from "../../components/CardVertical/CardVertical";
import BannerSliderNew from "../../components/BannerSliderNew/BannerSliderNew";
import AdCase from '../../components/AdCase/AdCase';
import { Link } from "react-router-dom";

function HomePage() {
  document.title = "Blog";
  const [noticias, setNoticias] = useState([]);
  const [lists, setLists] = useState([]);
  
  useEffect(() => {
    getData('news').then((resp) => {
      setNoticias(resp);
    })
    window.scrollTo(0, 0);
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
          {noticias.slice(0, 7).map((noticia, id) => {
              return (
                <React.Fragment key={id}>
                  <CardHorizontal data={noticia} key={id}/>
                  {((id - 1) % 3 === 0) && <AdCase/>}
                </React.Fragment>
              )
          })}
          <Link className="home-content-more" to={"/tag/noticia"}>+ VER MAIS</Link>

        </section>

        <section className="home-content-secondary">
          <h2 className="home-content-title">ÚLTIMAS LISTAS</h2>
          {lists.slice(0, 3).map((lists, id) => <CardVertical data={lists} key={id}/>)}
          <Link className="home-content-more" to={"/tag/lista"}>+ VER MAIS</Link>

        </section>

      </section>
    </main>
  )
}

export default HomePage