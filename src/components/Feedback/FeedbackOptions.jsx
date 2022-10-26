import { Button, FeedbackList } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackList>
      {Object.keys(options).map(option => (
        <Button
          onClick={onLeaveFeedback}
          name={option}
          type="button"
          key={option}
        >
          {option}
        </Button>
      ))}
    </FeedbackList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
