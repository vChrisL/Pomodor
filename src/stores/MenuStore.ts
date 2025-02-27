import {create} from "zustand/react";

type TodoMenuStore = {
  displayTodoMenu: boolean,
  setDisplayTodoMenu: (newState: boolean) => void
}

/**
 * Store for to-do menu visibility state.
 * @property displayTodoMenu Current to-do menu visibility state.
 * @property setDisplayTodoMenu (Function) Set the current to-do menu visibility state.
 */
export const useTodoMenuStore = create<TodoMenuStore>(set => ({
  displayTodoMenu: false,
  setDisplayTodoMenu: (newState) => {
    set({ displayTodoMenu: newState })
  }
}));