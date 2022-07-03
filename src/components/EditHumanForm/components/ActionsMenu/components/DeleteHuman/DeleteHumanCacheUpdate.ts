import { humansSlice } from '../../../../../../api';
import { useAppDispatch } from '../../../../../../store';

export const useDeleteHumanCacheUpdate = () => {
  const dispatch = useAppDispatch();

  return (result: { data: string }) => {
    dispatch(
      humansSlice.util.updateQueryData(
        'getHuman',
        result.data,
        (): void => undefined
      )
    );
    dispatch(
      humansSlice.util.updateQueryData(
        'getHumans',
        undefined,
        (draftHumans = []) => {
          if (draftHumans.filter) {
            return draftHumans.filter(({ id }) => id !== result.data);
          }
          return [];
        }
      )
    );
  };
};
