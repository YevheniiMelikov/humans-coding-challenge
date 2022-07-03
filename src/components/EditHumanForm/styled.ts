import styled from 'styled-components';

export const EditHumanFormContainer = styled.div`
  height: 132px;
  width: 100%;
  padding: 16px;
  box-sizing: border-box;

  background-color: #ffffff;
  box-shadow: 0 0 transparent, 0 0 transparent, 0 1px 3px 0 rgba(0, 0, 0, 0.1),
    0 1px 2px 0 rgba(0, 0, 0, 0.06);

  border-radius: 8px;

  font-size: 40px;
`;

export const EditHumanFormGrid = styled.div`
  height: 100%;
  width: 100%;

  display: grid;
  grid-template-columns: 100px 1fr min-content;
`;
