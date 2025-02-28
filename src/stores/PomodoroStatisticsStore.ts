import {create} from "zustand/react";

type StatisticsStore = {
  currentFocusPeriods: number,
  setCurrentFocusPeriods: (count: number) => void,
}

export const useStatisticsStore = create<StatisticsStore>(set => ({
  currentFocusPeriods: 0,
  setCurrentFocusPeriods: (count: number): void => {
    set({ currentFocusPeriods: count })
  }
}));