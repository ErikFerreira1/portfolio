import React from "react";
import { Link } from "react-router-dom";
import {
  BiBookAlt,
  BiHomeAlt,
  BiLogoGithub,
  BiLogoInstagramAlt,
  BiLogoLinkedin,
  BiUserCircle,
} from "react-icons/bi";
import {
  MdWorkOutline,
} from "react-icons/md";
import logo from "../../assets/perfil.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navLogo">
        <img src={logo} alt="Logo" />
      </div>
      <div>
        <ul className="navLinks">
          <li>
            <Link to="/">
              <BiHomeAlt />
              <span className="tooltip">Home</span>
            </Link>
          </li>
          <li>
            <Link to="../About">
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
          <li>
            <Link to="/publications">
              <BiBookAlt />
              <span className="tooltip">Publicações</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="social">
        <ul className="navLinksSocial">
          <li>
            <a
              href="https://www.github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BiLogoGithub />
              <span className="tooltip">GitHub</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BiLogoLinkedin />
              <span className="tooltip">LinkedIn</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BiLogoInstagramAlt />
              <span className="tooltip">Instagram</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
