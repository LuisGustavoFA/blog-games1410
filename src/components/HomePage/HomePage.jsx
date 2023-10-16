import React, { useEffect, useState } from "react";
import "./HomePage.css";
import { getData } from "../../database/DataApi";
import Card from "../Card/Card";
import Slider from "../Slider/Slider";

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
    <>
      <main className="home">
        {/* <Slider/> */}

        <section className="home-content">
          <section className="home-content-main">
            {noticias.map((noticia, id) => {
              return (
                <React.Fragment key={id}>
                  <Card data={noticia} key={id} />
                  {((id - 1) % 3 === 0) && <div className="home-horizontal-ad" alt="AD#3"></div>}
                </React.Fragment>
              )
            })}
          </section>

          <section className="home-content-secondary">
            <div className="list-card">
              <div className="list-card-header">
                <span className="list-card-title">LISTAS</span>
                <a href="#">Ver Mais +</a>
              </div>
              <a className="list-card-link" href='#'>Lista: Melhores jogos para celular</a>
              <a className="list-card-link" href='#'>Lista: Melhores jogos multiplayer</a>
              <a className="list-card-link" href='#'>Lista: Melhores jogos soulslike</a>
              <a className="list-card-link" href='#'>Lista: Melhores lançamentos do mês de setembro</a>
              <a className="list-card-link" href='#'>Lista: Melhores lançamentos da Nintendo em 2023</a>
            </div>

            <div className="list-card">
              <div className="list-card-header">
                <span className="list-card-title">LISTAS</span>
                <a href="#">Ver Mais +</a>
              </div>
              <a className="list-card-link" href='#'>Lista: Melhores jogos para celular</a>
              <a className="list-card-link" href='#'>Lista: Melhores jogos multiplayer</a>
              <a className="list-card-link" href='#'>Lista: Melhores jogos soulslike</a>
              <a className="list-card-link" href='#'>Lista: Melhores lançamentos do mês de setembro</a>
              <a className="list-card-link" href='#'>Lista: Melhores lançamentos da Nintendo em 2023</a>
            </div>
          </section>
        </section>
      </main>
    </>
  )
}

export default HomePage