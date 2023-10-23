import React, { useEffect, useState } from "react";
import "./HomePage.css";
import { getData } from "../../database/DataApi";
import Card from "../Card/Card";
import Slider from "../Slider/Slider";
import ListCard from "../ListCard/ListCard";

function HomePage() {
  window.scrollTo(0, 0);
  document.title = "Blog";
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    getData().then((resp) => {
      setNoticias(resp);
    })
  }, [])

  return (
    <main className="home">
      {/* <Slider/> */}
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
          <ListCard/>
          <ListCard/>
        </section>

      </section>
    </main>
  )
}

export default HomePage