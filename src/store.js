/* eslint-disable no-unused-labels */
import { create } from "zustand";
import zukepper from "zukeeper";
const useTodoStore = create(
  zukepper((set) => ({
    todos: [],
    editable: false,
    addTodo: (newTodo) => {
      set((state) => ({ todos: [...state.todos, newTodo] }));
    },
    deleteTodo: (index) => {
      set((state) => ({
        todos: state.todos.filter((_, todoIndex) => todoIndex !== index),
      }));
    },
    updateTodo: (newTodo, index) => {
      set((state) => ({ todos: [(state.todos[index] = newTodo)] }));
    },
    setEditable: () => {
      set((state) => ({ editable: !state.editable }));
    },
  }))
);
window.store = useTodoStore;
export default useTodoStore;
