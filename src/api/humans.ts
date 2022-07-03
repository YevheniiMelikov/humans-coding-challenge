import { createApi } from '@reduxjs/toolkit/query/react';
import { Human } from '../types';
import { fakeApi } from './fakeApi';

export const humansSlice = createApi({
  reducerPath: 'humans',
  baseQuery: fakeApi,
  tagTypes: ['Search'],
  endpoints: (builder) => ({
    getHumans: builder.query<Human[], string | void>({
      query: (search) => ({
        url: `/humans${search ? `?search=${search}` : ''}`,
        method: 'GET',
      }),
      providesTags: (_result, _error, arg) =>
        arg ? [{ type: 'Search' as const, id: 'LIST' }] : [],
    }),
    getHuman: builder.query<Human, string>({
      query: (humanId: string) => ({
        url: '/humans/:id',
        method: 'GET',
        params: { id: humanId },
      }),
    }),
    createHuman: builder.mutation<
      Human,
      Partial<Omit<Human, 'id' | 'createdAt' | 'updatedAt'>>
    >({
      query: (partialHuman) => ({
        url: '/humans/',
        method: 'POST',
        body: partialHuman,
      }),
      invalidatesTags: ['Search'],
    }),
    updateHuman: builder.mutation<
      Human,
      Pick<Human, 'id'> & Partial<Omit<Human, 'id' | 'createdAt' | 'updatedAt'>>
    >({
      query: (partialHuman) => ({
        url: '/humans/:id',
        method: 'PUT',
        body: partialHuman,
        params: { id: partialHuman.id },
      }),
      invalidatesTags: ['Search'],
    }),
    deleteHuman: builder.mutation<string, string>({
      query: (humanId) => ({
        url: '/humans/:id',
        method: 'DELETE',
        params: { id: humanId },
      }),
      invalidatesTags: ['Search'],
    }),
  }),
});

export const {
  useGetHumansQuery,
  useGetHumanQuery,
  useCreateHumanMutation,
  useDeleteHumanMutation,
  useUpdateHumanMutation,
} = humansSlice;
