import React from 'react';
import { NavbarContainer, NavbarContent, Logo } from './styled';

export const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <NavbarContent>
        <Logo href="/">Humans</Logo>
      </NavbarContent>
    </NavbarContainer>
  );
};
