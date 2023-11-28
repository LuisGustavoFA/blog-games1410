import { Link } from "react-router-dom"
import "./TagsCase.css";
import { format } from "../../functions/format";

function TagsCase( { tags, banner = false } ) {
  const className = banner ? "-banner" : "";

  return (
    <span className={`tags-case${className}`}>
      {tags?.map((tag, id) => {
        return (
          <Link className='tag' key={id} to={`/tag/${format(tag)}`}>{tag}</Link>
        )
      })}
    </span>
  )
}

export default TagsCase;