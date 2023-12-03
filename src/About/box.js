import "../static/styles/about/box.css";

const Box = ({ header, text, color, image, projectLink }) => {
  return (
    <div className="box" style={{ backgroundColor: color }}>
      <h3>{header}</h3>
      <p>{text}</p>
      {image && <img src={image} alt="image" />}
      {projectLink && (
        <a href={projectLink} target="_blank" rel="noopener noreferrer" />
      )}
    </div>
  );
};

export default Box;
