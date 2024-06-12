/* eslint-disable react/prop-types */
import { useState } from "react";
import useTodoStore from "../store.js";
import { Pencil, Trash, Check } from "lucide-react";
export default function TodoCard({ todo, index }) {
  const [newTodo, setNewTodo] = useState(todo);
  const { updateTodo, deleteTodo, editable, setEditable } = useTodoStore();
  return (
    <div>
      <li className="todoItem">
        <p>
          <input
            value={newTodo}
            readOnly={!editable}
            onChange={(e) => {
              console.log(e.target.value);
              setNewTodo(e.target.value);
            }}
          />
        </p>
        <div className="actionsContainer">
          {!editable ? (
            <Pencil
              onClick={() => {
                setEditable();
              }}
            />
          ) : (
            <Check
              onClick={() => {
                updateTodo(newTodo, index);
                setEditable();
              }}
            />
          )}
          <button
            onClick={() => {
              deleteTodo(index);
            }}
          >
            <Trash />
          </button>
        </div>
      </li>
    </div>
  );
}
