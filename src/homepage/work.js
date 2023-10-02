// Work.js

import React from "react";
import { Link } from "react-router-dom";
import "../static/styles//homepage/work.css";
import Projects from "./projects";
import Title from "../common/title";

const Work = ({ workRef }) => {
  return (
    <div className="work" ref={workRef}>
      <Title titleText="My Work" />
      <div className="projects-container">
        {Projects.map((project) => (
          <Link to={`/${project.linkData}`} key={project.id}>
            <div
              className="project"
              style={{ backgroundColor: project.backgroundColor }}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <img src={project.image} alt={project.title} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Work;
