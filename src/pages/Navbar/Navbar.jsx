import { Link } from "react-router-dom";
import {
  BiHomeAlt,
  BiEnvelope,
  BiLogoGithub,
  BiLogoLinkedin,
  BiUserCircle,
} from "react-icons/bi";
import { MdWorkOutline } from "react-icons/md";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link className="navLogo" to="/" aria-label="Ir para o início">
        EF
      </Link>

      <div>
        <ul className="navLinks">
          <li>
            <Link to="/">
              <BiHomeAlt />
              <span className="tooltip">Início</span>
            </Link>
          </li>
          <li>
            <Link to="/About">
              <BiUserCircle />
              <span className="tooltip">Sobre mim</span>
            </Link>
          </li>
          <li>
            <Link to="/Projects">
              <MdWorkOutline />
              <span className="tooltip">Projetos</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="social">
        <ul className="navLinksSocial">
          <li>
            <a
              href="https://github.com/ErikFerreira1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BiLogoGithub />
              <span className="tooltip">GitHub</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/erik-ferreira-b2287a285/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BiLogoLinkedin />
              <span className="tooltip">LinkedIn</span>
            </a>
          </li>
          <li>
            <a
              href="mailto:erikferreira03@outlook.com"
              aria-label="Enviar e-mail para Erik Ferreira"
            >
              <BiEnvelope />
              <span className="tooltip">erikferreira03@outlook.com</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
