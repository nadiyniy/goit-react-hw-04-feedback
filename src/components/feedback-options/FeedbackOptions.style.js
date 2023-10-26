import styled from 'styled-components';

export const StyledOptyonsDiv = styled.div`
  /* width: 600px; */
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px 20px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: lightcyan;
  box-shadow: 0px 0px 2px 0px gray;

  & button {
    background-color: lightyellow;

    padding: 5px 20px;
    border: 2px solid black;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0px 0px 2px 0px gray;
    transition: all 0.2s ease-in-out;
    &:hover {
      background-color: lightblue;
      box-shadow: inset 0px 0px 2px 0px gray;
    }
    &:focus {
      background-color: lightblue;
    }
    &:active {
      background-color: lightgreen;
    }
  }
`;
