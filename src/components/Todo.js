import React from 'react';

export const Todo = ({todo}) => {
    return (
        <li className="list_item">
            {todo.title}
        </li>
    );
};

