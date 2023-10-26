import styled from 'styled-components';

export const StyledStatisticsDiv = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: start;
  font-size: 13px;
  transition: all 0.2s ease-in;
  & p {
    border: 1px solid black;
    padding: 10px 20px;
    border-radius: 10px;
  }
`;
