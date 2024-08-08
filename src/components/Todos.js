import React from 'react';
import { Todoitem } from "./Todoitem";

export const Todos = ({ todos, ondelete }) => {
  return (
    <div className="container my-3">
      <h3 className="text-center my-3">Todos List</h3>
      {todos.length === 0 ? (
        "Nothing to display"
      ) : (
        todos.map((todo) => (
          <Todoitem todo={todo} key={todo.sn} ondelete={ondelete} />
        ))
      )}
    </div>
  );
};
