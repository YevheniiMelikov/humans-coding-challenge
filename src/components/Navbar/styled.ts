import styled from 'styled-components';

export const NavbarContainer = styled.div`
  height: 64px;
  width: 100%;
  background-color: rgb(31, 41, 55);
`;

export const NavbarContent = styled.div`
  height: 100%;
  width: 100%;
  max-width: 992px;
  box-sizing: border-box;
  padding: 0 16px;
  margin: auto;

  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.a`
  text-decoration: none;
  color: #ffffff;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  margin: auto 0;
`;
