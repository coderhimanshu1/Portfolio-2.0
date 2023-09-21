// Work.js

import React from "react";
import { Link } from "react-router-dom";
// import "./static/styles/work.css";
import Projects from "./projects";

const Work = () => {
  return (
    <div className="Work">
      <hr />
      <div className="title">
        <div className="dots-container">
          <div className="dot red"></div>
          <div className="dot yellow"></div>
          <div className="dot green"></div>
        </div>

        <div className="text">
          <span>My Work | | </span>
        </div>
      </div>

      <div className="projects-container">
        {Projects.map((project) => (
          <div className="project" key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <img src={project.image} alt={project.title} />
            <Link to={`/project${project.id}`}>View Project</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
