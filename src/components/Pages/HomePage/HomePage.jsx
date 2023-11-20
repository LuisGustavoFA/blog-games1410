import React, { useEffect, useState } from "react";
import "./HomePage.css";
import { getData, getListData } from "../../../database/DataApi";
import Card from "../../Card/Card";
import ListCard from "../../ListCard/ListCard";
import BannerSlider from "../../BannerSlider/BannerSlider";

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