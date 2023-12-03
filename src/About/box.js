import "../static/styles/about/box.css";

const Box = ({ header, text, color }) => {
  return (
    <div className="box" style={{ backgroundColor: color }}>
      <h3>{header}</h3>
      <p>{text}</p>
    </div>
  );
};

export default Box;
