import { HiUserAdd } from 'react-icons/hi';
import { useHistory } from 'react-router-dom';
import { Button } from '../../components/Button';
import { EditHumanForm } from '../../components/EditHumanForm';
import { HumansList } from '../../components/HumansList';
import { Search } from '../../components/Search';
import {
  ActionsContainer,
  HumanFormContainer,
  ListContainer,
  NotesContainer,
  SearchContainer,
  NotesGrid,
} from './styled';

export const Notes = ({ newHuman }: { newHuman?: boolean }) => {
  const history = useHistory();

  const handleClick = () => history.push('/humans');

  return (
    <NotesContainer>
      <NotesGrid>
        <SearchContainer>
          <Search />
        </SearchContainer>
        <ActionsContainer>
          <Button icon={<HiUserAdd />} onClick={handleClick}>
            Add Human
          </Button>
        </ActionsContainer>
        <ListContainer>
          <HumansList />
        </ListContainer>
        <HumanFormContainer>
          <EditHumanForm newHuman={newHuman} />
        </HumanFormContainer>
      </NotesGrid>
    </NotesContainer>
  );
};
