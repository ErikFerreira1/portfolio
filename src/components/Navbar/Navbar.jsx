import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faHome, faInfoCircle, faProjectDiagram } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navLogo">
        <img src="#" alt="Logo" />
      </div>
      <div>
        <ul className="navLinks">
          <li><Link to="/"><FontAwesomeIcon icon={faHome} /> </Link></li>
          <li><Link to="/about"><FontAwesomeIcon icon={faInfoCircle} /> </Link></li>
          <li><Link to="/projects"><FontAwesomeIcon icon={faProjectDiagram} /> </Link></li>
        </ul>
      </div>
      <div className="social">
        <ul className="navLinksSocial">
          <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /> </a></li>
          <li><a href="https://www.github.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /> </a></li>
          <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /> </a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
