import React, { useState } from "react";
import "./App.css";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import Application from "./Tictactoe/Application";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
      <Application/>
    </div>
  );
}

export default App;
