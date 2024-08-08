import './App.css';
import Header from "./components/Header";
import { Todos } from './components/Todos';
import { Footer } from "./components/Footer";
import { Addtodo } from "./components/Addtodo";
import React, { useState, useEffect } from 'react';

function App() {
  // Initialize todos from localStorage or with default values
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [
      { sn: 1, title: "ME assignment", des: "14 august is submission date" },
      { sn: 2, title: "BDA assignment", des: "16 august is submission date" },
      { sn: 3, title: "Meditation ", des: "meditate in mornig atleast for 15 min" }
    ];
  });

  // Effect to sync todos with localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Function to add a new todo
  const addTodo = (title, des) => {
    let sn = todos.length ? todos[0].sn - 1 : 1; // Ensure new todos have a unique serial number
    const mytodo = { sn, title, des };
    setTodos([mytodo, ...todos]); // Add the new todo to the beginning of the list
  };
  

  // Function to delete a todo
  const ondelete = (sn) => {
    // Filter out the todo with the given serial number
    setTodos(todos.filter(todo => todo.sn !== sn));
  };

  return (
    <>
      <Header />
      <Addtodo addTodo={addTodo} />
      <Todos todos={todos} ondelete={ondelete} />
      <Footer />
    </>
  );
}

export default App;
