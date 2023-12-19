import { calctime } from '../../functions/calctime';
import { format } from '../../functions/format';
import TagsCase from '../TagsCase/TagsCase';
import './CardHorizontal.css';
import { Link } from "react-router-dom";

function CardHorizontal({ data }) {
  const { banner, title, info, tags } = data;
  const title_url = format(title);

  return (
    <>
      <Link className="card" to={`/article/${title_url}`}>
        <div className="card-banner" alt="banner da notícia" style={{ backgroundImage: `url(${banner})` }}></div>
        <div className='card-data'>
          <div className='card-data-header'>
            <TagsCase tags={tags}/>
          </div>
          <span className="card-data-link">{title}</span>
          <div className='card-data-footer'>
            <span className="card-data-footer-info">
              Por <Link to={`/search/${format(info.autor)}`}>{info.autor}</Link>, {calctime(data.info?.time)}
            </span>
          </div>
        </div>
      </Link>
      {/* <div className='card-underline'></div> */}
    </>
  )
}

export default CardHorizontal;