const Title = ({ titleText }) => {
  return (
    <>
      <hr />
      <div className="title">
        <div className="dots-container">
          <div className="dot red"></div>
          <div className="dot yellow"></div>
          <div className="dot green"></div>
        </div>

        <div className="text">
          <span>{titleText} | | </span>
        </div>
      </div>
    </>
  );
};

export default Title;
