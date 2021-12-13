import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IPost } from '../../models/IPost';

export const postAPI = createApi({
  reducerPath: 'postAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  tagTypes: ['Posts'],
  endpoints: (build) => ({
    fetchPosts: build.query<IPost[], number>({
      query: (limit = 5) => ({
        url: `/posts`,
        params: { _limit: limit },
      }),
      providesTags: (result) => ['Posts'],
    }),
    createPost: build.mutation<IPost, IPost>({
      query: (post) => ({
        url: `/posts`,
        method: 'POST',
        body: post,
      }),
      invalidatesTags: (result) => ['Posts'],
    }),
    updatePost: build.mutation<IPost, IPost>({
      query: (post) => ({
        url: `/posts/${post.id}`,
        method: 'PUT',
        body: post,
      }),
      invalidatesTags: (result) => ['Posts'],
    }),
    deletePost: build.mutation<IPost, number>({
      query: (id) => ({
        url: `/posts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result) => ['Posts'],
    }),
  }),
});
