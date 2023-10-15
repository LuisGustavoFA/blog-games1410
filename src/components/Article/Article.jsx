import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Article.css"

function Article() {
  window.scrollTo(0, 0);
  let {title} = useParams();
  title = title.replace(/-/g, " ");
  // const noticias = require("../../noticias.json");
  // const id = noticias.find((item) => item["title"].toLowerCase().includes(title));

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
  const id = noticiasFix.find((item) => item["title"].normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(title));
  document.title = id?.title;

  return (
    <>
    <div className="article-banner-case">
      <div className="article-banner-background" style={{backgroundImage: `url(${id?.banner})`}} alt="banner"></div>
      <div className="article-banner" style={{backgroundImage: `url(${id?.banner})`}} alt="banner"></div>
    </div>
    <main className="article-main">
      <div className="article-vertical-ad">AD#1</div>
      <section className="article-content">
        <div className="article-content-header">
          <h1>{id?.title}</h1>
          <h5>{id?.subtitle}</h5>
        </div>
        <div className="article-horizontal-ad">AD#3</div>
        <div className="article-content-main">
          <p>{id?.text}</p>
          <h5>{id?.info}</h5>
        </div>
      </section>
      <div className="article-vertical-ad">AD#2</div>
    </main>
    </>
  )
}

export default Article;