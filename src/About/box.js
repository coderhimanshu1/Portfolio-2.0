import "../static/styles/about/box.css";

const Box = ({ header, text, color, icon, image, projectLink, linkText }) => {
  return (
    <div className="box" style={{ backgroundColor: color }}>
      {header && <h3>{header}</h3>}
      {text && <p>{text}</p>}
      {icon && <img src={icon} alt="milestone icon" className="box-icon" />}
      {image && <img src={image} alt="timeline event" className="box-image" />}
      {projectLink && (
        <a href={projectLink} target="_blank" rel="noopener noreferrer">
          {linkText}
        </a>
      )}
    </div>
  );
};

export default Box;
