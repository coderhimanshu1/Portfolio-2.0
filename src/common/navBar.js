import React from "react";
import { Link } from "react-router-dom";
import "../static/styles/common/navBar.css";
import "../static/styles/desktop_styles.css";
import Logo from "../static/icons/logo.png";

const Navbar = ({ handleContactClick }) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">
          <img src={Logo} alt="LinkedIn" />
        </Link>
      </div>
      <div className="navbar-right">
        <Link to="/about">About</Link>
        <Link to="/projects">Work</Link>
        <Link to="/blog">Blog</Link>
        <a
          href="https://drive.google.com/file/d/1aGA8lpeTsa9Vt0yGd4C3Ej2o0rUXMIyi/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>

        <span onClick={handleContactClick}>Get In Touch</span>
      </div>
    </nav>
  );
};

export default Navbar;
