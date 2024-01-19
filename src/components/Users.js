import React from 'react';
import { User } from './User';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export const Users = () => {
  const users = useSelector((state) => state.users.users);
  return (
    <div>
      {users.map((user) => {
        return <User key={user.id} user={user} />;
      })}
    </div>
  );
};
