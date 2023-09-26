const List = ({ items }) => (
  <ul>
    {items.map((item, index) => (
      <li key={index}>
        <h4>{item.header}</h4>
        <p>{item.text}</p>
        {item.challenge && (
          <p>
            <b>Challenge: </b>
            {item.challenge}
          </p>
        )}
        {item.solution && (
          <p>
            {" "}
            <b>Solution: </b>
            {item.solution}
          </p>
        )}
      </li>
    ))}
  </ul>
);

export default List;
