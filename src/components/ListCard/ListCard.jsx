import { Link } from "react-router-dom"
import './ListCard.css';

function ListCard({ data }) {
  const title_url = data.title.replace(/ /g, "-").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  const title = data.title.toUpperCase();

  return (
    <Link to={`/list/${title_url}`} className="list-card-link" href='#'>{title}</Link>
  )
}

export default ListCard