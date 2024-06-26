/* eslint-disable react/prop-types */
import TodoCard from "./TodoCard";
import useTodoStore from "../store";
export default function TodoList() {
  const { todos } = useTodoStore();
  return (
    <ul className="main">
      {todos.map((todo, todoIndex) => {
        return <TodoCard index={todoIndex} key={todoIndex} todo={todo} />;
      })}
    </ul>
  );
}
