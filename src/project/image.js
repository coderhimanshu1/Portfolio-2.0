import "../static/styles/project/image.css";

const Image = ({ src, alt, heading, className }) => (
  <div className={`Image ${className || ""}`}>
    <h2>{heading}</h2>
    <img src={src} alt={alt} />
  </div>
);

export default Image;
