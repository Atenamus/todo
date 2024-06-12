/* eslint-disable no-unused-labels */
import { create } from "zustand";
import zukepper from "zukeeper";
const useTodoStore = create(
  zukepper((set) => ({
    todos: [],
    addTodo: (newTodo) => {
      set((state) => ({ todos: [...state.todos, newTodo] }));
    },
    deleteTodo: (index) => {
      set((state) => ({
        todos: state.todos.filter((_, todoIndex) => todoIndex !== index),
      }));
    },
    updateTodo: (newTodo, index) => {
      set((state) => ({
        todos: [
          ...state.todos.slice(0, index),
          newTodo,
          ...state.todos.slice(index + 1),
        ],
      }));
    },
  }))
);
window.store = useTodoStore;
export default useTodoStore;
