import {CounterCard} from "./CounterCardComponent.tsx";
import {useStatisticsStore} from "../stores/PomodoroStatisticsStore.ts";

export function MobileStatsMenu() {
  const currentFocusPeriods = useStatisticsStore(state => state.currentFocusPeriods);
  const currentBreakPeriods = useStatisticsStore(state => state.currentBreakPeriods);
  const totalFocusPeriods = useStatisticsStore(state => state.totalFocusPeriods);
  const totalBreakPeriods = useStatisticsStore(state => state.totalBreakPeriods);

  return (
    <div className={"w-full h-full z-10"}>
      <h1 className={"text-2xl p-4"}>STATISTICS</h1>

      <div className={`flex flex-col justify-center items-center gap-4 overflow-x-auto py-2 mt-10`}>
        <CounterCard message={"Current Focus Periods"} count={currentFocusPeriods}></CounterCard>
        <CounterCard message={"Current Break Periods"} count={currentBreakPeriods}></CounterCard>
        <CounterCard message={"Total Focus Periods"} count={totalFocusPeriods}></CounterCard>
        <CounterCard message={"Total Break Periods"} count={totalBreakPeriods}></CounterCard>
      </div>
    </div>
  )
}