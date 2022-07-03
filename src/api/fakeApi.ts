import {
  FetchArgs,
  BaseQueryFn,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/query/react';
import { v4 as uuidV4 } from 'uuid';
import { RootState } from '../store';
import { Human } from '../types';

const createHuman = (
  humanPart: Pick<Human, 'name'> & Partial<Human>
): Human => {
  return {
    id: uuidV4(),
    createdAt: Date.now(),
    ...humanPart,
    updatedAt: Date.now(),
  };
};

export const fakeApi: BaseQueryFn<
  FetchArgs,
  unknown,
  FetchBaseQueryError,
  {},
  FetchBaseQueryMeta
> = (args, { getState }) => {
  const { url, params, method, body } = args;
  const state: RootState = getState();

  const allHumans: Human[] =
    state.humans.queries['getHumans(undefined)'].data || [];

  if (method === 'GET' && url.startsWith('/humans/') && params?.id) {
    return Promise.resolve({
      data: allHumans.find(({ id }) => params.id === id),
    });
  }

  if (method === 'GET' && url.startsWith('/humans')) {
    const parts = url.split('=');
    const search = parts[1]?.toLowerCase();
    if (search) {
      return Promise.resolve({
        data: allHumans.filter(({ name }) =>
          name.toLowerCase().startsWith(search)
        ),
      });
    }

    return Promise.resolve({
      data: allHumans,
    });
  }

  if (method === 'POST') {
    return Promise.resolve({
      data: createHuman(body),
    });
  }

  if (method === 'PUT') {
    return Promise.resolve({
      data: createHuman(body),
    });
  }

  if (method === 'DELETE') {
    return Promise.resolve({
      data: params?.id,
    });
  }

  return Promise.reject({ reason: new Error('Not found') });
};
