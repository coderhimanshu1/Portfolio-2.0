import "../static/styles/project/devFlow.css";

const DevFlow = ({ devFlow }) => {
  return (
    <div className="DevFlow">
      {devFlow && (
        <div>
          <h2>Development Flow</h2>
          {devFlow.headings.map(({ heading, steps }) => (
            <div key={heading}>
              <h3>{heading}</h3>
              <ol>
                {Object.values(steps).map(({ header, text }) => (
                  <li key={header}>
                    <h4>{header}</h4>
                    <p>{text}</p>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DevFlow;
