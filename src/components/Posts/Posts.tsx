import React, { useState } from 'react';
import { postAPI } from '../../feature/posts/posts-api-slice';
import { IPost } from '../../models/IPost';
import ReactJson, { InteractionProps } from 'react-json-view';
import { Divider, Select } from 'antd';
import { Button } from '../shared';
import './index.less';

export const Posts = () => {
  const [limit, setLimit] = useState(100);
  const { data: posts, isLoading, error } = postAPI.useFetchPostsQuery(limit);

  const [createPost, {}] = postAPI.useCreatePostMutation();
  const [updatePost, {}] = postAPI.useUpdatePostMutation();
  const [deletePost, {}] = postAPI.useDeletePostMutation();

  const handleCreatePost = () => {
    const title = prompt() || 'default title';
    createPost({ title } as IPost); // id will be auto incremented
  };

  const handlePostUpdate = (id: number, newTitle: string) =>
    updatePost({ id, title: newTitle });

  const handlePostDelete = (e: InteractionProps) => {
    let idx = e.namespace.length ? Number(e.namespace[0]) : Number(e.name);
    deletePost(posts![idx].id);
  };

  return (
    <>
      <Button bg={'grey'}>app styles button</Button>
      {isLoading && <p>loading posts...</p>}
      {error && (
        <p>
          error on fetching posts: <pre>{JSON.stringify(error, null, 2)}</pre>
        </p>
      )}

      <Divider />
      <Select value={limit} onChange={(value) => setLimit(Number(value))}>
        <Select.Option value={'1'}>1</Select.Option>
        <Select.Option value={5}>5</Select.Option>
        <Select.Option value={10}>10</Select.Option>
        <Select.Option value={100}>100</Select.Option>
      </Select>
      <Divider />
      {posts && (
        <ReactJson
          indentWidth={2}
          onEdit={(e) =>
            handlePostUpdate(
              posts[Number(e.namespace[0])].id,
              e.new_value as string
            )
          }
          onAdd={handleCreatePost}
          onDelete={handlePostDelete}
          src={posts}
        />
      )}
    </>
  );
};
