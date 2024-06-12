/* eslint-disable react/prop-types */
import { useState } from "react";
import useTodoStore from "../store.js";
import { Pencil, Trash, Check } from "lucide-react";
export default function TodoCard({ todo, index }) {
  const [newTodo, setNewTodo] = useState(todo);
  const [editable, setEditable] = useState(false);
  const { updateTodo, deleteTodo } = useTodoStore();
  return (
    <div>
      <li className="todoItem">
        <p>
          <input
            value={newTodo}
            readOnly={!editable}
            onChange={(e) => {
              setNewTodo(e.target.value);
            }}
          />
        </p>
        <div className="actionsContainer">
          {!editable ? (
            <Pencil
              onClick={() => {
                setEditable(!editable);
              }}
            />
          ) : (
            <Check
              onClick={() => {
                updateTodo(newTodo, index);
                setEditable(!editable);
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
