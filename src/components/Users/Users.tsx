import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { useEffect } from 'react';
import { fetchUsers } from '../../feature/users/action-creators';
import ReactJson from 'react-json-view';
import './index.less';

export const Users = () => {
  const dispatch = useAppDispatch();
  const { users, isLoading, error } = useAppSelector((s) => s.users);
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <>
      <ReactJson indentWidth={2} src={users} />
      <pre>{JSON.stringify(users, null, 3)}</pre>
    </>
  );
};
