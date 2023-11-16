import "../static/styles/project/projectHeader.css";
import Links from "./links";
import Title from "../common/title";
import Image from "./image";

const ProjectHeader = ({
  projectName,
  backgroundColor,
  description,
  demoVideo,
  role,
  techStack,
  timeline,
  liveLink,
  github,
  API,
  handleButtonClick,
  badge,
}) => {
  return (
    <>
      <Title />
      <div
        className="ProjectHeader"
        style={{ backgroundColor: backgroundColor }}
      >
        <h1>{projectName}</h1>
        <div className="ProjectHeader-items">
          <div className="ProjectHeader-items-text">
            <p>{description}</p>
            {badge && (
              <img className="ProjectHeader-badge" src={badge} alt="badge" />
            )}
            <div className="ProjectHeader-info">
              <div>
                <h4>Roles</h4>
                <p>{role}</p>
              </div>
              <div>
                <h4>Technologies</h4>
                <p>{techStack}</p>
              </div>
              <div>
                <h4>Timeline</h4>
                <p>{timeline}</p>
              </div>
            </div>
          </div>
          <div className="ProjectHeader-items-demo">
            {demoVideo && (
              <div>
                <iframe
                  width="560"
                  height="315"
                  src={demoVideo}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  autoPlay
                ></iframe>
              </div>
            )}
            <Links github={github} liveLink={liveLink} API={API} />
          </div>
        </div>
        <div className="button-container">
          <button className="Home-button" onClick={handleButtonClick}>
            Find more...
            <span className="arrow"></span>
          </button>
        </div>
      </div>
    </>
  );
};

export default ProjectHeader;
