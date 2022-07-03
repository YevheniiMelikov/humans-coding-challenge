import { useHistory, useLocation } from 'react-router-dom';
import { useGetHumansQuery } from '../../api';
import { HumanCard } from './components/HumanCard';
import { ListContainer } from './styled';

export const HumansList = () => {
  const history = useHistory();
  const location = useLocation();
  const { data, isError, isLoading } = useGetHumansQuery(
    new URLSearchParams(location.search).get('search') || undefined
  );

  // TODO: handle loading and error states
  if (isLoading || isError || !data) {
    return null;
  }

  if (!data.length) {
    return <ListContainer>No humans yet</ListContainer>;
  }

  const getClickHandler = (id: string) => () => history.push(`/humans/${id}`);

  return (
    <ListContainer>
      {data.map((human) => (
        <HumanCard
          key={human.id}
          human={human}
          onClick={getClickHandler(human.id)}
        />
      ))}
    </ListContainer>
  );
};
