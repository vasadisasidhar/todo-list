import React from "react";

const TodoItem = ({ index, todo, deleteTodo }) => (
  <div>
    <span>{todo}</span>
    <button onClick={() => deleteTodo(index)}>Delete</button>
  </div>
);

export default TodoItem;
