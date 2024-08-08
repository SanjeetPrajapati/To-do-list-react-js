import React, { useState } from 'react';

export const Addtodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");

  const submit = (e) => {
    e.preventDefault(); // Prevent form from submitting the traditional way
    if (!title || !des) {
      alert("Title and description cannot be blank");
      return;
    }
    addTodo(title, des); // Add the new todo
    setTitle(""); // Clear the input fields
    setDes("");
  };

  return (
    <div className="container my-3">
      <h3>Add a Todo</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Todo Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            id="title"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="des" className="form-label">Todo Description</label>
          <input
            type="text"
            value={des}
            onChange={(e) => setDes(e.target.value)}
            className="form-control"
            id="des"
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Todo</button>
      </form>
    </div>
  );
};
