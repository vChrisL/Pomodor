import {create} from "zustand/react";
import {TodoItem} from "../classes/TodoItem.ts";

const LOCAL_STORAGE_NAME = "todoItems";

type TodoListStore = {
  todoItems: TodoItem[],
  addItem: (item: TodoItem) => void,
  modifyItemTitle: (target: TodoItem, newTitle: string) => void,
  modifyItemCheckState: (target: TodoItem, checkState: boolean) => void,
  deleteItem: (target: TodoItem) => void,
}

/**
 * Store for to-do list items.
 * @param todoItems An array containing all to-do list items.
 * @param addItem (Function) Add a new item to the to-do items array. Accepts one argument; `item` of type `TodoItem`.
 * @param modifyItemTitle (Function) Modifies the target item's title. Accepts two arguments; `target` of type `TodoItem` and `newTitle` of type `string`.
 * @param modifyItemCheckState (Function) Modifies the target item's checked state. Accepts two arguments; `target` of type `TodoItem` and `checkState` of type `boolean`.
 * @param deleteItem (Function) Removes the target item from the to-do items array. Accepts one argument; `target` of type `TodoItem`.
 */
export const useTodoListStore = create<TodoListStore>(set => ({
  todoItems: JSON.parse(localStorage.getItem(LOCAL_STORAGE_NAME) ?? "[]"),
  addItem: (item: TodoItem): void => {
    set(state => {
      localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify([...state.todoItems, item]));
      return {todoItems: [...state.todoItems, item]}
    });
  },
  modifyItemTitle: (target: TodoItem, newTitle: string): void => {
    set(state => {
      const itemIndex: number = state.todoItems.indexOf(target);
      const tmpTodoItems: TodoItem[] = [...state.todoItems];

      if (!tmpTodoItems[itemIndex].trySetTitle(newTitle)) {
        localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify([...state.todoItems]));
        return {todoItems: [...state.todoItems]};
      }

      return {todoItems: tmpTodoItems}
    });
  },
  modifyItemCheckState: (target: TodoItem, checkState: boolean) => {
    set(state => {
      const itemIndex: number = state.todoItems.indexOf(target);
      const tmpTodoItems: TodoItem[] = [...state.todoItems];

      tmpTodoItems[itemIndex].IsComplete = checkState;

      localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify([...state.todoItems]));
      return {todoItems: tmpTodoItems}
    });
  },
  deleteItem: (target: TodoItem): void => {
    set(state => {
      const itemIndex: number = state.todoItems.indexOf(target);
      const tmpTodoItems: TodoItem[] = [...state.todoItems];
      tmpTodoItems.splice(itemIndex, 1);

      localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify([...state.todoItems]));
      return {todoItems: tmpTodoItems}
    })
  }
}));