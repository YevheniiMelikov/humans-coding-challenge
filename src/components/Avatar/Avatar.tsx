import { useState } from 'react';
import { AvatarContainer, AvatarFallback } from './styled';

export interface AvatarProps {
  fallback: string;
  url?: string;
}

export const Avatar = ({ url, fallback }: AvatarProps) => {
  const [error, setError] = useState(false);

  const handeError = () => {
    setError(true);
  };

  return (
    <AvatarContainer>
      {error ? (
        <img src={url} onError={handeError} alt={fallback} />
      ) : (
        <AvatarFallback>{fallback}</AvatarFallback>
      )}
    </AvatarContainer>
  );
};
