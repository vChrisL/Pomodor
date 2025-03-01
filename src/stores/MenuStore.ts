import {create} from "zustand/react";

type MenuStore = {
  displayMenu: boolean,
  setDisplayMenu: (newState: boolean) => void
}

/**
 * Store for to-do menu visibility state.
 * @property displayMenu Current to-do menu visibility state.
 * @property setDisplayMenu (Function) Set the current to-do menu visibility state.
 */
export const useTodoMenuStore = create<MenuStore>(set => ({
  displayMenu: false,
  setDisplayMenu: (newState) => {
    set({ displayMenu: newState })
  }
}));

/**
 * Store for to-do menu visibility state.
 * @property displayMenu Current statistics menu visibility state.
 * @property setDisplayMenu (Function) Set the current statistics menu visibility state.
 */
export const useStatsMenuStore = create<MenuStore>(set => ({
  displayMenu: false,
  setDisplayMenu: (newState) => {
    set({ displayMenu: newState })
  }
}));