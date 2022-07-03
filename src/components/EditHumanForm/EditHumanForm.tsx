import { useParams } from 'react-router-dom';
import { useGetHumanQuery } from '../../api';
import { getInitialsFromFullName } from '../../utils/nameUtils';
import { Avatar } from '../Avatar';
import { ActionsMenu } from './components/ActionsMenu';
import { EditableName } from './components/EditableName';
import { EditHumanFormContainer, EditHumanFormGrid } from './styled';

export const EditHumanForm = ({ newHuman }: { newHuman?: boolean }) => {
  const { id } = useParams<{ id?: string }>();

  const { data, isLoading, isError } = useGetHumanQuery(id || '', {
    skip: newHuman,
  });

  if (isLoading || isError) {
    return null;
  }

  return (
    <EditHumanFormContainer>
      <EditHumanFormGrid>
        <Avatar fallback={getInitialsFromFullName(data?.name)} />
        <EditableName name={data?.name} newHuman={newHuman} />
        <ActionsMenu hidden={newHuman} />
      </EditHumanFormGrid>
    </EditHumanFormContainer>
  );
};
