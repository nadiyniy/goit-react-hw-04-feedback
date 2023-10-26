import { StyledOptyonsDiv } from './FeedbackOptions.style';
import propTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <StyledOptyonsDiv>
      {options.map((option, idx) => {
        return (
          <button
            key={idx}
            onClick={() => {
              onLeaveFeedback(option);
            }}
          >
            {option}
          </button>
        );
      })}
    </StyledOptyonsDiv>
  );
};
FeedbackOptions.propTypes = {
  options: propTypes.array.isRequired,
  onLeaveFeedback: propTypes.func.isRequired,
};
