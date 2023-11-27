import { calctime } from '../../functions/calctime';
import { format } from '../../functions/format';
import TagsCase from '../TagsCase/TagsCase';
import './CardVertical.css';
import { Link } from "react-router-dom";

function CardVertical({ data, hasBanner = false }) {
  const { banner, title, info, tags } = data;
  const title_url = format(title);

  return (
    <>
      <Link className={`${"card-list"} ${hasBanner? " hasBanner" : ""}`} to={`/${data.itens ? "list" : "article"}/${title_url}`}>
        <div className={`${"card-list-banner"} ${hasBanner? " hasBanner" : ""}`} alt="banner da notícia" style={{ backgroundImage: `url(${banner})` }}></div>
        <div className='card-list-data' >
          <div className='card-list-data-header'>
            <TagsCase tags={tags}/>
          </div>
          <span className="card-list-data-link">{title}</span>
          <div className='card-list-data-footer'>
            <span className="card-list-data-footer-info">
              Por <Link to={`/search/${format(info.autor)}`}>{info.autor}</Link> 
            </span>
            <span>|</span>
            {calctime(data.info?.time)}
          </div>
        </div>
      </Link>
    </>
  )
}

export default CardVertical;