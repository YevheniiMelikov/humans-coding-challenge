import styled from 'styled-components';

export const AvatarContainer = styled.div`
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

export const AvatarFallback = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  color: white;
  background: rgb(186, 184, 184);
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 50%;
`;
