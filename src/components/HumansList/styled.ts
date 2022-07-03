import styled from 'styled-components';

export const ListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  & > * {
    border-bottom: 1px solid rgb(229, 231, 235);
    &:last-child {
      border-width: 0;
    }
  }
`;
