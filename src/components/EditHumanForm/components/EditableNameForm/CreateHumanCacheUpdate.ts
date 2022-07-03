import { humansSlice } from '../../../../api';
import { useAppDispatch } from '../../../../store';
import { Human } from '../../../../types';

export const useCreateHumanCacheUpdate = () => {
  const dispatch = useAppDispatch();

  return (result: { data: Human }) => {
    dispatch(
      humansSlice.util.updateQueryData(
        'getHuman',
        result.data.id,
        (): Human | void => {
          return result.data;
        }
      )
    );
    dispatch(
      humansSlice.util.updateQueryData(
        'getHumans',
        undefined,
        (draftHumans = []) => {
          if (draftHumans.unshift) {
            draftHumans.unshift(result.data);
            return draftHumans;
          }
          return [result.data];
        }
      )
    );
  };
};
