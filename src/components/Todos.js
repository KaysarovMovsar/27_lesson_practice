import React, { useEffect } from 'react';
import { Todo } from './Todo';
import { useDispatch, useSelector } from 'react-redux';
import { loadTodos } from '../redux/action';
import { useParams } from 'react-router-dom';

export const Todos = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const todos = useSelector((state) => state.todos.todos);

  useEffect(() => {
    if (id !== undefined) {
      dispatch(loadTodos(id));
    }
  }, [id]);
  return (
    <ul className="list">
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} />;
      })}
    </ul>
  );
};
