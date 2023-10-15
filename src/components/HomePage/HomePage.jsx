import { Link } from "react-router-dom"
import React, { useEffect, useState } from "react";
import "./HomePage.css"

function HomePage() {

  const apiUrl = 'https://raw.githubusercontent.com/LuisGustavoFA/api-blog-games1410/main/api.json';
  const [noticias, setNoticias] = useState("");
  useEffect(() => {
    fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Erro na requisição');
      }
      return response.json();
    })
    .then((data) => {
      setNoticias(data);
    })
    .catch((error) => {
      console.error(error);
    });
  }, [])

  const noticiasFix = [...noticias];

  return (
    <>
    <main className="home-main">
      <div className="home-vertical-ad">AD#1</div>
      <section className="home-content">
        {noticiasFix.map((noticia, id) =>{
          return (
            <React.Fragment key={id}>
              <div className="news-case">
                <div className="news-banner" alt="banner da notícia" style={{backgroundImage: `url(${noticia.banner})`}}></div>
                <Link className="news-link" to={`/article/${noticia.title.replace(/ /g, "-").toLowerCase()}`}>{noticia.title}</Link>
              </div>
              { (id === 1 || id === 4) && <div className="home-horizontal-ad">AD#3</div>}
            </React.Fragment>
          )
        })}
      </section>
      <div className="home-vertical-ad">AD#2</div>
    </main>
    </>
  )
}

export default HomePage