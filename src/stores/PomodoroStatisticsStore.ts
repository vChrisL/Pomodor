import {create} from "zustand/react";

type StatisticsStore = {
  currentFocusPeriods: number,
  currentBreakPeriods: number,
  incrementPeriod: (isFocusPeriod: boolean) => void,
}

export const useStatisticsStore = create<StatisticsStore>(set => ({
  currentFocusPeriods: 0,
  currentBreakPeriods: 0,
  incrementPeriod: (isFocusPeriod: boolean): void => {
    if(isFocusPeriod) {
      set(state => ({ currentFocusPeriods: state.currentFocusPeriods + 1 }))
    }
    else {
      set(state => ({ currentBreakPeriods: state.currentBreakPeriods + 1 }))
    }
  }
}));