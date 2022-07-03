import styled from 'styled-components';

export const HumanCardContainer = styled.div`
  width: 100%;
  height: 77px;
  padding: 16px 8px;
  box-sizing: border-box;
  cursor: pointer;
`;

export const HumanCardGrid = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 45px 1fr min-content;
  font-size: 18px;
`;

export const HumanName = styled.div`
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.25rem;
  margin-left: 12px;
`;
