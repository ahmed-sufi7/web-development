import { useState } from "react";

export default function TodoList() {
  let [todos, setTodos] = useState(["Sample task"]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    setTodos([...todos, newTodo]);
    setNewTodo("")
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
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
        <li>{todo}</li>
      ))}
    </div>
  );
}
