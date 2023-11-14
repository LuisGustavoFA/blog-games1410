import { Link } from "react-router-dom"
import { AiFillGithub } from "react-icons/ai"
import "./Footer.css"

function Footer() {
  return (
    <footer className="footer">
      <nav>
        <ul>
          <Link className="footer-link" to={"https://github.com/joaogabrielfa"} target="_blank" rel="noreferrer">
            <AiFillGithub size={30}/>
            João Gabriel
          </Link>
          <Link className="footer-link" to={"https://github.com/luisgustavofa"} target="_blank" rel="noreferrer">
            <AiFillGithub size={30}/>
            Luis Gustavo
          </Link>
          <li>V1.08 13/11/23</li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer