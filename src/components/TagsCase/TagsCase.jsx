import { Link } from "react-router-dom"
import "./TagsCase.css";

function TagsCase( { tags, banner = false } ) {
  const className = banner ? "-banner" : "";

  return (
    <span className={`tags-case${className}`}>
      {tags?.map((tag, id) => {
        return (
          <Link className='tag' key={id} to={`/search/${tag.replace(/ /g, "-").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()}`}>{tag}</Link>
        )
      })}
    </span>
  )
}

export default TagsCase;