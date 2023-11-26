import { calctime } from '../../functions/calctime';
import { format } from '../../functions/format';
import TagsCase from '../TagsCase/TagsCase';
import './Card.css';
import { Link } from "react-router-dom";

function Card({ data }) {
  const { banner, title, info, tags } = data;
  const title_url = format(title);

  return (
    <>
      <Link className="card" to={`/article/${title_url}`}>
        <div className="card-banner" alt="banner da notícia" style={{ backgroundImage: `url(${banner})` }}></div>
        <div className='card-data'>
          <TagsCase tags={tags}/>
          <span className="card-link">{title}</span>
          <span className="card-info">
            Por <Link to={`/search/${format(info.autor)}`}>{info.autor}</Link>, {calctime(data.info?.time)}
          </span>
        </div>
      </Link>
      <div className='card-underline'></div>
    </>
  )
}

export default Card;