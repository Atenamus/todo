import { useState } from "react";
import useTodoStore from "../store";
export default function TodoInput() {
  const [todoValue, setTodoValue] = useState("");
  const { addTodo } = useTodoStore();
  return (
    <header>
      <input
        type="text"
        placeholder="Enter Todo..."
        value={todoValue}
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          addTodo(todoValue);
          setTodoValue("");
        }}
      >
        Add
      </button>
    </header>
  );
}
