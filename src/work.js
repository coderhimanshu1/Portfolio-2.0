// Work.js

import React from "react";
import { Link } from "react-router-dom";
// import "./static/styles/work.css";
import Projects from "./projects";
import Title from "./title";

const Work = () => {
  return (
    <div className="Work">
      <Title titleText="My Work" />
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
