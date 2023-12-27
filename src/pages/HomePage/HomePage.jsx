import React, { useEffect, useState } from "react";
import "./HomePage.css";
import { getData } from "../../database/DataApi";
import CardHorizontal from "../../components/CardHorizontal/CardHorizontal";
import ReviewSection from "../../components/ReviewSection/ReviewSection";
import CardVertical from "../../components/CardVertical/CardVertical";
import BannerSliderNew from "../../components/BannerSliderNew/BannerSliderNew";
import AdCase from '../../components/AdCase/AdCase';
import PageButtons from "../../components/PageButtons/PageButtons";

function HomePage() {
  document.title = "Blog";
  const [noticias, setNoticias] = useState([]);
  const [lists, setLists] = useState([]);
  const [page, setPage] = useState(1);
  
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
          <h2 id="title" className="home-content-title">ÚLTIMAS NOTÍCIAS</h2>
          {noticias.slice(((page - 1) * 10), (page * 10)).map((noticia, id) => {
              return (
                <React.Fragment key={id}>
                  <CardHorizontal data={noticia} key={id}/>
                  {((id - 1) % 3 === 0) && <AdCase/>}
                </React.Fragment>
              )
          })}

          <PageButtons page={page} setPage={setPage} maxPages={Math.ceil(noticias.length / 10)} scrollto={document.getElementById("title")}/>

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