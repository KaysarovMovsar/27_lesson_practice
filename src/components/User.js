import React from 'react';
import { NavLink, useParams } from 'react-router-dom';

export const User = ({ user }) => {
  const { id } = useParams();
  return (
    <div className={`user_item ${user.id === id ? 'active' : ''}`}>
      <NavLink to={`/${user.id}`}>{user.name}</NavLink>
    </div>
  );
};
