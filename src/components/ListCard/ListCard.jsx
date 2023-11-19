import { Link } from "react-router-dom"
import './ListCard.css';
import { format } from "../../functions/format";

function ListCard({ lists }) {
  return (
    <div className="list-card">
      <span className="list-card-title">LISTAS</span>
      {lists.map((list) => {
        return (
          <Link
            to={`/list/${format(list.title)}`}
            className="list-card-link"
            href='#'>
            {(list.title?.length > 35 ? list.title.substring(0, 35) + '...' : list.title).toUpperCase()}
          </Link>
        )
      })}
    </div>

  )
}

export default ListCard