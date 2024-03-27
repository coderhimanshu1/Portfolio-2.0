import React from "react";

import "../static/styles/homepage/techStack.css";
import "../static/styles/common/common.css";

import javascript from "../static/icons/js.png";
import react from "../static/icons/react.svg";
import next from "../static/icons/next.png";
import python from "../static/icons/python.png";
import node from "../static/icons/nodejs.png";
import flask from "../static/icons/flask.png";
import postgresql from "../static/icons/postgresql.png";
import jquery from "../static/icons/jquery.png";
import restAPI from "../static/icons/restAPI.png";

import Title from "../common/title";

const TechStack = ({ techStackRef }) => {
  const icons = [
    { name: next, text: "Next.js" },
    { name: react, text: "React.js" },
    { name: javascript, text: "JavaScript" },
    { name: python, text: "Python" },
    { name: node, text: "Node.js" },
    { name: flask, text: "Flask" },
    { name: postgresql, text: "PostgreSQL" },
    { name: jquery, text: "jQuery" },

    { name: restAPI, text: "RESTful API" },
  ];

  return (
    <div className="techStack" ref={techStackRef}>
      <Title />
      <div className="techStack-container">
        <div className="techStack-heading">
          <h1>Tech Stack</h1>
        </div>
        <div className="icons-container">
          {icons.map((icon, index) => (
            <div className="icon" key={index}>
              <img src={icon.name} alt={icon.name} className="icon-image" />
              <div className="icon-text">{icon.text}</div>
            </div>
          ))}
        </div>
        <p>and more...</p>
      </div>
    </div>
  );
};

export default TechStack;
