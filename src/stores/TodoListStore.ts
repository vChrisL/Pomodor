import {create} from "zustand/react";
import {TodoItem} from "../classes/TodoItem.ts";

type TodoListStore = {
  todoItems: TodoItem[],
  addItem: (item: TodoItem) => void,
  // modifyItemTitle: () => void,
  // deleteItem: () => void,
}

export const useTodoListStore = create<TodoListStore>(set => ({
  todoItems: [],
  addItem: (item: TodoItem): void => {
    set(state => {
      return {todoItems: [...state.todoItems, item]}
    });
  }
}));