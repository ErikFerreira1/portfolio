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
              <BiHomeAlt />{" "}
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <BiUserCircle />{" "}
            </Link>
          </li>
          <li>
            <Link to="/portfolio">
              <MdWorkOutline />{" "}
            </Link>
          </li>
          <li>
            <Link to="/publications">
              <BiBookAlt />{" "}
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
              <BiLogoGithub />{" "}
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BiLogoLinkedin />{" "}
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BiLogoInstagramAlt />{" "}
            </a>
          </li>
          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
