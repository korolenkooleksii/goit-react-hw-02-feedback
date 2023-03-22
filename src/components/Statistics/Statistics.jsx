
const Statistics = ({
  state: { good, neutral, bad },
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <h2>Statistics</h2>
      <ul>
        <li>
          <span>Good: {good}</span>
        </li>
        <li>
          <span>Neutral: {neutral}</span>
        </li>
        <li>
          <span>Bad: {bad}</span>
        </li>
        <li>
          <span>Total: {total}</span>
        </li>
        <li>
          <span>Positive Feedback: {positivePercentage}</span>
        </li>
      </ul>
    </div>
  );
};

export default Statistics;
