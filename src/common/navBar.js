import React from "react";
import { Link } from "react-router-dom";
import "../static/styles/common/navBar.css";
import "../static/styles/desktop_styles.css";

const Navbar = ({ handleContactClick }) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">Himanshu Kumar</Link>
      </div>
      <div className="navbar-right">
        <Link to="/about">About</Link>
        {/* <span onClick={handleWorkClick}>Work</span> */}
        <Link to="/blog">Blog</Link>
        <a
          href="https://drive.google.com/file/d/1lJfUGCnBruY1RJJ4QfdO7p_jltHuFqGo/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
        {/* <a
          href="https://www.linkedin.com/in/himanshukumar3/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a> */}
        <span onClick={handleContactClick}>Contact</span>
      </div>
    </nav>
  );
};

export default Navbar;
