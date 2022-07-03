import styled from 'styled-components';
import { HiSearch } from 'react-icons/hi';

export const SearchContainer = styled.div`
  margin: auto;
  position: relative;
`;

export const SearchInput = styled.input`
  font-size: 0.875rem;
  line-height: 1.25rem;
  box-shadow: 0px 1px 3px 0 rgb(0 0 0 / 10%);
  padding: 4px 12px 4px 36px;
  border-color: rgb(209, 213, 219);
  border-style: solid;
  border-radius: 6px;
  width: 100%;
  height: 38px;
  box-sizing: border-box;
  appearance: none;
  background-color: #fff;
  border-width: 1px;
`;

export const SearchIcon = styled(HiSearch)`
  color: rgb(156, 163, 175);
  width: 16px;
  height: 100%;
  margin: auto;

  position: absolute;
  left: 12px;
  top: 0;
`;
