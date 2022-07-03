import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { SearchContainer, SearchIcon, SearchInput } from './styled';

export const Search = () => {
  const history = useHistory();
  const location = useLocation();

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { value } = event.target;

    if (value) {
      return history.push({
        pathname: location.pathname,
        search: `?search=${value}`,
      });
    }

    return history.push({
      pathname: location.pathname,
      search: '',
    });
  };

  return (
    <SearchContainer>
      <SearchIcon />
      <SearchInput onChange={handleChange} />
    </SearchContainer>
  );
};
