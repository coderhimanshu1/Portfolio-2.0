import "../static/styles/project/projectHeader.css";
import Links from "./links";

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
}) => {
  return (
    <div className="ProjectHeader" style={{ backgroundColor: backgroundColor }}>
      <h1>{projectName}</h1>
      <p>{description}</p>
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
      <div className="button-container">
        <button className="Home-button" onClick={handleButtonClick}>
          Find more...
          <span className="arrow"></span>
        </button>
      </div>
    </div>
  );
};

export default ProjectHeader;
