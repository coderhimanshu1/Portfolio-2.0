import React from "react";
import { Link } from "react-router-dom";
import "../static/styles/common/navBar.css";
import "../static/styles/desktop_styles.css";

const Navbar = ({ handleContactClick, handleWorkClick }) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">Himanshu Kumar</Link>
      </div>
      <div className="navbar-right">
        <Link to="/about">About</Link>
        {/* <span onClick={handleWorkClick}>Work</span> */}
        {/* <Link to="/blog">Blog</Link> */}
        <a
          href="https://drive.google.com/file/d/1G8_-2CpTHjNp0u6Ld9R2B4M1jny3uCng/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
        <span onClick={handleContactClick}>Contact</span>
      </div>
    </nav>
  );
};

export default Navbar;
