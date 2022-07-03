import styled from 'styled-components';

export const PopoverContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  box-shadow: 0 0 transparent, 0 0 transparent, 0 1px 3px 0 rgba(0, 0, 0, 0.1),
    0 1px 2px 0 rgba(0, 0, 0, 0.06);
  border-radius: 6px;
  padding: 4px 0;
`;

export const PopoverAction = styled.div`
  background-color: #ffffff;
  height: 20px;
  padding: 8px 16px;
  font-size: 0.875rem;
  line-height: 1.25rem;
`;
