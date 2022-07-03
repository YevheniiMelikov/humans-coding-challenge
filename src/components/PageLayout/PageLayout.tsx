import React from 'react';
import styled from 'styled-components';

const PageLayoutContainer = styled.div`
  width: 100%;
  display: grid;
  grid-auto-rows: 64px min-content;
`;

export const PageLayout = ({ children }: { children?: React.ReactNode }) => (
  <PageLayoutContainer>{children}</PageLayoutContainer>
);
