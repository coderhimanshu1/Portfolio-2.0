import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../static/styles//homepage/work.css";
import Projects from "./projects";
import Title from "../common/title";

const Work = () => {
  // State to store the current background color
  const [bgColor, setBgColor] = useState("");

  return (
    <div className="work" style={{ backgroundColor: bgColor }}>
      <Title titleText="My Work" />
      <div className="projects-container">
        {Projects.map((project) => (
          <Link to={`/projects/${project.linkData}`} key={project.id}>
            <div
              className="project"
              style={{ backgroundColor: project.backgroundColor }}
              onMouseEnter={() => setBgColor(project.backgroundColor)}
              onMouseLeave={() => setBgColor("")}
            >
              <div className="project-description-container">
                <div className="project-description">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                {project.badge && (
                  <img
                    className="work-badge"
                    src={project.badge}
                    alt={project.title}
                  />
                )}
              </div>
              <img src={project.image} alt={project.title} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Work;
