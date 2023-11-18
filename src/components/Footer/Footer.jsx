import { Link } from "react-router-dom"
import { AiFillGithub } from "react-icons/ai"
import "./Footer.css"

function Footer() {
  return (
    <footer className="footer">
      <nav>
        <ul>
          <Link className="footer-case" to={"https://github.com/joaogabrielfa"} target="_blank" rel="noreferrer">
            <AiFillGithub className="footer-icon" size={28}/>
            <h2 className="footer-text">João Gabriel</h2>
          </Link>
          <Link className="footer-case" to={"https://github.com/luisgustavofa"} target="_blank" rel="noreferrer">
            <AiFillGithub className="footer-icon" size={28}/>
            <h2 className="footer-text" >Luis Gustavo</h2>
          </Link>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer