import { ListButtons, Button, WrapButton } from './FeedbackOptions.styled';
import { BsHandThumbsUp, BsHandThumbsDown } from 'react-icons/bs';
import { FaRegHandLizard } from 'react-icons/fa';
import PropTypes from "prop-types";

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <ListButtons>
      <WrapButton>
        <Button type="button" onClick={() => onLeaveFeedback('good')}>
          <BsHandThumbsUp />
          Good
        </Button>
      </WrapButton>
      <WrapButton>
        <Button type="button" onClick={() => onLeaveFeedback('neutral')}>
          <FaRegHandLizard />
          Neutral
        </Button>
      </WrapButton>
      <WrapButton>
        <Button type="button" onClick={() => onLeaveFeedback('bad')}>
          <BsHandThumbsDown />
          Bad
        </Button>
      </WrapButton>
    </ListButtons>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
