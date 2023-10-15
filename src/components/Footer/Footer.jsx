import { Link } from "react-router-dom"
import { AiFillGithub } from "react-icons/ai"
import "./Footer.css"

function Footer() {
  return (
    <footer className="footer">
      <nav>
        <ul>
          <li>
            <AiFillGithub size={30} />
            <Link to={"https://github.com/joaogabrielfa"} target="_blank" rel="noreferrer">João Gabriel</Link>
          </li>
          <li>
            <AiFillGithub size={30} />
            <Link to={"https://github.com/luisgustavofa"} target="_blank" rel="noreferrer">Luis Gustavo</Link>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer