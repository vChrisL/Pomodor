import {create} from "zustand/react";

type StatisticsStore = {
  currentFocusPeriods: number,
  currentBreakPeriods: number,
  totalFocusPeriods: number,
  totalBreakPeriods: number,
  incrementPeriod: (isFocusPeriod: boolean) => void,
}

/**
 * @property currentFocusPeriods Represents the current number of focus periods during the current session.
 * @property currentBreakPeriods Represents the current number of break periods during the current session.
 * @property incrementPeriod (Function) Handles incrementing the appropriate period according to the isFocusPeriod boolean parameter.
 */
export const useStatisticsStore = create<StatisticsStore>(set => ({
  currentFocusPeriods: 0,
  currentBreakPeriods: 0,
  totalFocusPeriods: localStorage.getItem("pomodoroStatistics") ? JSON.parse(localStorage.getItem("pomodoroStatistics")!)[0] : 0,
  totalBreakPeriods: localStorage.getItem("pomodoroStatistics") ? JSON.parse(localStorage.getItem("pomodoroStatistics")!)[1] : 0,
  incrementPeriod: (isFocusPeriod: boolean): void => {
    if(isFocusPeriod) {
      set(state => ({ currentFocusPeriods: state.currentFocusPeriods + 1 }));
      set(state => {
        const statCount: number[] = [state.totalFocusPeriods + 1, state.totalBreakPeriods];
        localStorage.setItem("pomodoroStatistics", JSON.stringify(statCount));

        return { totalFocusPeriods: state.totalFocusPeriods + 1 };
      });
    }
    else {
      set(state => ({ currentBreakPeriods: state.currentBreakPeriods + 1 }));
      set(state => {
        const statCount: number[] = [state.totalFocusPeriods, state.totalBreakPeriods + 1];
        localStorage.setItem("pomodoroStatistics", JSON.stringify(statCount));

        return { totalBreakPeriods: state.totalBreakPeriods + 1 };
      });
    }
  }
}));