import './Card.css';
import { Link } from "react-router-dom"

function Card({ data }) {
  const { banner, title, info } = data;
  const title_url = title.replace(/ /g, "-").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  return (
    <>
      <Link className="card" to={`/article/${title_url}`}>
        <div className="card-banner" alt="banner da notícia" style={{ backgroundImage: `url(${banner})` }}></div>
        <div className='card-data'>
          <span className="card-tag">GAMES</span>
          <span className="card-link">{title}</span>
          <span className="card-info">
            Por <Link to={`/search/${info.autor.replace(/ /g, "-").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()}`}>{info.autor}</Link>
          </span>
        </div>
      </Link>
      <div className='card-underline'></div>
    </>
  )
}

export default Card;