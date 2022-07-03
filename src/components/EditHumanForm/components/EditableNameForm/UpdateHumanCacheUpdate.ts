import { humansSlice } from '../../../../api';
import { useAppDispatch } from '../../../../store';
import { Human } from '../../../../types';

export const useUpdateHumanCacheUpdate = () => {
  const dispatch = useAppDispatch();

  return (result: { data: Human }) => {
    dispatch(
      humansSlice.util.updateQueryData(
        'getHuman',
        result.data.id,
        (draftHuman?: Human): Human | void => {
          if (!draftHuman) {
            return draftHuman;
          }
          return {
            ...draftHuman,
            name: result.data.name,
            updatedAt: result.data.updatedAt,
          };
        }
      )
    );
    dispatch(
      humansSlice.util.updateQueryData(
        'getHumans',
        undefined,
        (draftHumans?: Human[]): Human[] | void => {
          const updatedHuman = draftHumans?.find(
            ({ id: updatedId }) => updatedId === result.data.id
          );
          if (!updatedHuman || !draftHumans) {
            return draftHumans;
          }
          return [
            {
              ...updatedHuman,
              name: result.data.name,
              updatedAt: result.data.updatedAt,
            },
            ...draftHumans.filter(
              ({ id: updatedId }) => updatedId !== result.data.id
            ),
          ];
        }
      )
    );
  };
};
