import {useTimerStore} from "../stores/TimerStore.ts";

export function FocusTimerInput() {
  const focusTimer = useTimerStore(state => state.focusTimer);
  const setFocusTimer = useTimerStore(state => state.setFocusTimer);

  return (
    <div className={"flex flex-row gap-1"}>
      <input
        type={"number"}
        defaultValue={focusTimer.getHours}
        placeholder={"H"}
        min={0}
        max={60}
        className={"w-14 pl-2 bg-[var(--secondary-bg-color)] rounded-lg"}
      />
      <p className={"text-right text-[var(--secondary-bg-color)]"}>:</p>

      <input
        type={"number"}
        defaultValue={focusTimer.getMinutes}
        placeholder={"M"}
        min={0}
        max={60}
        className={"w-14 pl-2 bg-[var(--secondary-bg-color)] rounded-lg"}
      />
      <p className={"text-right text-[var(--secondary-bg-color)]"}>:</p>

      <input
        type={"number"}
        defaultValue={focusTimer.getSeconds}
        placeholder={"S"}
        min={0}
        max={60}
        className={"w-14 pl-2 bg-[var(--secondary-bg-color)] rounded-lg"}
      />
    </div>
  )
}

export function BreakTimerInput() {
  const breakTimer = useTimerStore(state => state.breakTimer);
  const setBreakTimer = useTimerStore(state => state.setBreakTimer);

  return (
    <div className={"flex flex-row gap-1"}>
      <input
        type={"number"}
        defaultValue={breakTimer.getHours}
        placeholder={"H"}
        min={0}
        max={60}
        className={"w-14 pl-2 bg-[var(--secondary-bg-color)] rounded-lg"}
      />
      <p className={"text-right text-[var(--secondary-bg-color)]"}>:</p>

      <input
        type={"number"}
        defaultValue={breakTimer.getMinutes}
        placeholder={"M"}
        min={0}
        max={60}
        className={"w-14 pl-2 bg-[var(--secondary-bg-color)] rounded-lg"}
      />
      <p className={"text-right text-[var(--secondary-bg-color)]"}>:</p>

      <input
        type={"number"}
        defaultValue={breakTimer.getSeconds}
        placeholder={"S"}
        min={0}
        max={60}
        className={"w-14 pl-2 bg-[var(--secondary-bg-color)] rounded-lg"}
      />
    </div>
  )
}