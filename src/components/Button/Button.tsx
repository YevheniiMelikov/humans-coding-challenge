import React, { forwardRef } from 'react';
import { ButtonContainer } from './styled';

export interface ButtonProps {
  icon?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  children?: React.ReactNode;
  variant?: 'default' | 'link';
}

export const Button = forwardRef<HTMLDivElement, ButtonProps>(
  ({ icon, children, variant = 'default', ...props }, ref) => {
    return (
      <ButtonContainer
        hasIcon={Boolean(icon)}
        variant={variant}
        {...props}
        ref={ref}
      >
        {icon}
        {children}
      </ButtonContainer>
    );
  }
);
