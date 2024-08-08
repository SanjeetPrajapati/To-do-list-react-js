import React from 'react';

export const Todoitem = ({ todo, ondelete }) => {
  return (
    <div className="todo-item">
      <h4>{todo.title}</h4>
      <p>{todo.des}</p>
      <button onClick={() => ondelete(todo.sn)} className="btn btn-danger">Delete</button>
    </div>
  );
};
