import {create} from "zustand/react";
import {TodoItem} from "../classes/TodoItem.ts";

type TodoListStore = {
  todoItems: TodoItem[],
  addItem: (item: TodoItem) => void,
  // modifyItemTitle: () => void,
  // deleteItem: () => void,
}

export const useTodoListStore = create<TodoListStore>(set => ({
  todoItems: [
    new TodoItem("Implement adding todo items"),
    new TodoItem("Add ability to change todo item name"),
    new TodoItem("Add ability to delete todo items"),
    new TodoItem("Add strike-through when todo item is marked as complete (DONE)"),
    new TodoItem("Add horizontal break line after each todo item (DONE)"),
  ],
  addItem: (item: TodoItem): void => {
    set(state => {
      return {todoItems: [...state.todoItems, item]}
    });
  }
}));