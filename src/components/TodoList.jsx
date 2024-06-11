/* eslint-disable react/prop-types */
import TodoCard from "./TodoCard";
import useTodoStore from "../store";
export default function TodoList() {
  const { todos, editable } = useTodoStore();
  console.log("🚀 ~ TodoList ~ todos:", todos);
  return (
    <ul className="main">
      {todos.map((todo, todoIndex) => {
        return (
          <TodoCard index={todoIndex} key={todoIndex}>
            <p>
              <input value={todo} readOnly={!editable} onChange={() => {}} />
            </p>
          </TodoCard>
        );
      })}
    </ul>
  );
}
