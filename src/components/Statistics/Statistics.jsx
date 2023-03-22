import { ListStatistics, ElementStatistics } from './Statistics.styled';
import PropTypes from 'prop-types';

const Statistics = ({
  state: { good, neutral, bad },
  total,
  positivePercentage,
}) => {
  return (
    <ListStatistics>
      <ElementStatistics>Good: {good}</ElementStatistics>
      <ElementStatistics>Neutral: {neutral}</ElementStatistics>
      <ElementStatistics>Bad: {bad}</ElementStatistics>
      <ElementStatistics>Total: {total}</ElementStatistics>
      <ElementStatistics>
        Positive Feedback: {positivePercentage}
      </ElementStatistics>
    </ListStatistics>
  );
};

Statistics.propTypes = {
  state: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};

export default Statistics;
