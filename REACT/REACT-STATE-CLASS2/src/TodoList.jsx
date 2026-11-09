import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [todos, setTodos] = useState([{ task: "Sample task", id: uuidv4() }]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    setTodos((prevTodos) => {
      return [...prevTodos, { task: newTodo, id: uuidv4() }];
    });
    setNewTodo("");
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
  };

  return (
    <div>
      <input
        placeholder="Add a test"
        value={newTodo}
        onChange={updateTodoValue}
      />
      <br />
      <button onClick={addNewTask}>Add</button>
      <br />
      <br />
      <hr />
      <h4>Tasks todo</h4>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span>{todo.task}</span>
          &nbsp; &nbsp;
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
      ))}
    </div>
  );
}
