import GitHub from "../static/icons/github.png";
import live from "../static/icons/live.png";
import apiIcon from "../static/icons/api.png";

import "../static/styles/project/links.css";

const Links = ({ github, liveLink, API }) => (
  <div className="links">
    <div className="link">
      <a href={github} target="_blank" rel="noopener noreferrer">
        <img src={GitHub} alt="GitHub" />
        <p>GitHub</p>
      </a>
    </div>
    {liveLink && (
      <div className="link">
        <a href={liveLink} target="_blank" rel="noopener noreferrer">
          <img src={live} alt="Live Link" />
          <p>Live Link</p>
        </a>
      </div>
    )}
    {API && (
      <div className="link">
        <a href={API} target="_blank" rel="noopener noreferrer">
          <img src={apiIcon} alt="API Documentation" />
          <p>API Doc</p>
        </a>
      </div>
    )}
  </div>
);

export default Links;
