import { useHistory, useParams } from 'react-router-dom';
import { useDeleteHumanMutation } from '../../../../../../api';
import { PopoverAction } from '../../styled';
import { useDeleteHumanCacheUpdate } from './DeleteHumanCacheUpdate';

export const DeleteHuman = () => {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();

  const [deleteHuman] = useDeleteHumanMutation();
  const deleteHumanCacheUpdate = useDeleteHumanCacheUpdate();

  const handleClick = () => {
    deleteHuman(id).then((result) => {
      deleteHumanCacheUpdate(result as { data: string });
      history.push('/history/new');
    });
  };

  return <PopoverAction onClick={handleClick}>Delete human</PopoverAction>;
};
