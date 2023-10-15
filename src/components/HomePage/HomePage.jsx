import React, { useEffect, useState } from "react";
import "./HomePage.css";
import { getData } from "../../database/DataApi";
import Card from "../Card/Card";

function HomePage() {
  document.title = "Blog";
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    getData().then((resp) =>{
      setNoticias(resp);
    })
  }, [])

  return (
    <>
    <main className="home-main">
      <div className="home-vertical-ad">AD#1</div>
      <section className="home-content">
        {noticias.map((noticia, id) =>{
          return (
            <React.Fragment key={id}>  
              <Card data={noticia} key={id}/>
              { ((id - 1)%3 === 0) && <div className="home-horizontal-ad" alt="AD#3"></div>}
            </React.Fragment>

            // <React.Fragment key={id}>
            //   <div className="news-case">
            //     <div className="news-banner" alt="banner da notícia" style={{backgroundImage: `url(${noticia.banner})`}}></div>
            //     <Link className="news-link" to={`/article/${noticia.title.replace(/ /g, "-").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()}`}>{noticia.title}</Link>
            //   </div>
            //   { (id === 1 || id === 4) && <div className="home-horizontal-ad">AD#3</div>}
            // </React.Fragment>
          )
        })}
      </section>
      <div className="home-vertical-ad">AD#2</div>
    </main>
    </>
  )
}

export default HomePage