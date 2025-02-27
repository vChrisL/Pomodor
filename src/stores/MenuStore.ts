import {create} from "zustand/react";

type TodoMenuStore = {
  displayTodoMenu: boolean,
  setDisplayTodoMenu: (newState: boolean) => void
}

export const useTodoMenuStore = create<TodoMenuStore>(set => ({
  displayTodoMenu: false,
  setDisplayTodoMenu: (newState) => {
    set({ displayTodoMenu: newState })
  }
}));