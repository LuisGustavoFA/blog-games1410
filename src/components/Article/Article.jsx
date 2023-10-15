import { useParams } from "react-router-dom";
import "./Article.css"

function Article() {
  let {title} = useParams();
  title = title.replace(/-/g, " ");
  const noticias = require("../../noticias.json");
  const id = noticias.find((item) => item["title"].toLowerCase().includes(title));

  return (
    <>
    <div className="article-banner" style={{backgroundImage: `url(${id.banner})`}} alt="banner"></div>
    <main className="article-main">
      <div className="article-vertical-ad">AD#1</div>
      <section className="article-content">
        <div className="article-content-header">
          <h1>{id.title}</h1>
          <h5>{id.subtitle}</h5>
        </div>
        <div className="article-horizontal-ad">AD#3</div>
        <div className="article-content-main">
          <p>{id.text}</p>
          <h5>{id.info}</h5>
        </div>
      </section>
      <div className="article-vertical-ad">AD#2</div>
    </main>
    </>
  )
}

export default Article;