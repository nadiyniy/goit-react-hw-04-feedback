import styled from 'styled-components';

export const StyledTitleDiv = styled.div`
  & h2 {
    position: relative;
    padding: 20px;
    &::before {
      content: '';
      position: absolute;
      bottom: 20%;
      left: 50%;
      width: 100px;
      height: 2px;
      background-color: black;
      transform: translateX(-50%);
    }
  }
`;
