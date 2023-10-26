import { StyledTitleDiv } from './Section.style';
import propTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <StyledTitleDiv>
      <h2>{title}</h2>
      {children}
    </StyledTitleDiv>
  );
};

Section.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.node.isRequired,
};
