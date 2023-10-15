import './Card.css';
import { Link } from "react-router-dom"

function Card({data}) {
  const {banner, title} = data;
  const title_url = title.replace(/ /g, "-").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()

  return (
    <Link className="card" to={`/article/${title_url}`}>
      <div className="card-banner" alt="banner da notícia" style={{ backgroundImage: `url(${banner})` }}></div>
      <span className="card-link">{title}</span>
    </Link>
  )
}

export default Card;