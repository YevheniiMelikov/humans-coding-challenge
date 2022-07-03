import styled, { css } from 'styled-components';
import { ButtonProps } from './Button';

export const ButtonContainer = styled.div<
  { hasIcon?: boolean } & Pick<ButtonProps, 'variant'>
>`
  box-sizing: border-box;
  height: 36px;
  padding: 8px 12px;

  display: grid;
  ${({ hasIcon }) =>
    hasIcon &&
    css`
      grid-template-columns: min-content 1fr;
    `}
  color: rgb(55, 65, 81);
  line-height: 1rem;
  font-weight: 500;
  font-size: 0.875rem;
  cursor: pointer;
  align-items: center;

  ${({ variant }) =>
    variant === 'default' &&
    css`
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);
      border-radius: 0.375rem;
      background-color: #ffffff;

      &:hover {
        background-color: rgb(229, 231, 235);
      }
    `}

  ${({ variant }) =>
    variant === 'link' &&
    css`
      &:hover {
        color: rgb(107, 114, 128);
      }
    `}

  & > svg {
    margin-left: -0.25rem;
    margin-right: 0.5rem;
    width: 1.25rem;
    height: 1.25rem;
  }
`;
