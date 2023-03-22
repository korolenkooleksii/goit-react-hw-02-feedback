

const ServiceEvaluation = ({ handleClick }) => {
  return (
    <div>
      <h2>Please leave feedback</h2>
      <ul>
        <li>
          <button type="button" onClick={() => handleClick('good')}>
            Good
          </button>
        </li>
        <li>
          <button type="button" onClick={() => handleClick('neutral')}>
            Neutral
          </button>
        </li>
        <li>
          <button type="button" onClick={() => handleClick('bad')}>
            Bad
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ServiceEvaluation;