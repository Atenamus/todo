/* eslint-disable react/prop-types */
import useTodoStore from "../store.js";
import { Pencil, Trash } from "lucide-react";
export default function TodoCard({ children, index }) {
  const { deleteTodo } = useTodoStore();
  return (
    <div>
      <li className="todoItem">
        {children}
        <div className="actionsContainer">
          <button>
            <Pencil />
          </button>
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
