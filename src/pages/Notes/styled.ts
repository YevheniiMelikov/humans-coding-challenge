import styled from 'styled-components';

export const NotesContainer = styled.div`
  width: 100%;
  height: 100%;

  max-width: 992px;
  box-sizing: border-box;
  padding: 16px;
  margin: 0 auto;
`;

export const NotesGrid = styled.div`
  display: grid;
  grid-template-columns: 312px 1fr;
  grid-template-rows: 46px 66px 1fr;
  grid-template-areas:
    'search form'
    'actions form'
    'list form';

  @media (max-width: 768px) {
    grid-template-columns: 100%;
    grid-template-rows: 46px 66px min-content 1fr;
    grid-template-areas:
      'search'
      'actions'
      'form'
      'list';
  }
`;

export const SearchContainer = styled.div`
  grid-area: search;
  width: 100%;
`;

export const ActionsContainer = styled.div`
  grid-area: actions;
  width: fit-content;
  margin: auto 0;
`;

export const ListContainer = styled.div`
  grid-area: list;
  max-height: 100%;
  overflow: auto;
`;

export const HumanFormContainer = styled.div`
  grid-area: form;
  width: 100%;
  overflow: hidden;
  @media (min-width: 769px) {
    padding-left: 16px;
  }
`;
