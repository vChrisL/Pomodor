import {create} from "zustand/react";
import {Time} from "../classes/Time.ts";

type TimerStore = {
  focusTimer: Time,
  setFocusTimer: (newTime: Time) => void,

  breakTimer: Time,
  setBreakTimer: (newTime: Time) => void
}

/**
 * Store for focus and break timer data.
 * @property focusTimer Contains timer data for focus period.
 * @property setFocusTimer (Function) Set a new time for focusTimer.
 * @property breakTimer Contains timer data for break period.
 * @property setBreakTimer (Function) Set a new time for breakTimer.
 */
export const useTimerStore = create<TimerStore>(set => ({
  focusTimer: new Time(0, 25, 0),
  setFocusTimer: (newTime: Time) => {
    set({ focusTimer: newTime })
  },

  breakTimer: new Time(0, 5, 0),
  setBreakTimer: (newTime: Time) => {
    set({ breakTimer: newTime })
  },
}));