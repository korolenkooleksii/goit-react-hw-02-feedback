import { ListButtons, Button, WrapButton } from './FeedbackOptions.styled';
import { BsHandThumbsUp, BsHandThumbsDown } from 'react-icons/bs';
import { FaRegHandLizard } from 'react-icons/fa';
import PropTypes from "prop-types";
import { variantFeedbacks } from 'components/constans';

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <ListButtons>
      <WrapButton>
        <Button type="button" onClick={() => onLeaveFeedback(variantFeedbacks.good)}>
          <BsHandThumbsUp />
          Good
        </Button>
      </WrapButton>
      <WrapButton>
        <Button type="button" onClick={() => onLeaveFeedback(variantFeedbacks.neutral)}>
          <FaRegHandLizard />
          Neutral
        </Button>
      </WrapButton>
      <WrapButton>
        <Button type="button" onClick={() => onLeaveFeedback(variantFeedbacks.bad)}>
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
