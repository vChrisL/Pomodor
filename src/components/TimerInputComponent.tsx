import {useTimerStore} from "../stores/TimerStore.ts";

type TimerInputProps = {
  time: number[],
  setNewTime:  React.Dispatch<React.SetStateAction<number[]>>
}

export function FocusTimerInput({time, setNewTime}: TimerInputProps) {
  const focusTimer = useTimerStore(state => state.focusTimer);

  return (
    <div className={"flex flex-row gap-1 text-[var(--text-color)]"}>
      <input
        type={"number"}
        defaultValue={focusTimer.getHours}
        placeholder={"H"}
        min={0}
        max={60}
        onChange={(e) => { setNewTime([parseInt(e.target.value), time[1], time[2]]) }}
        className={"w-14 pl-2 bg-[var(--secondary-bg-color)] rounded-lg"}
      />
      <p className={"text-right text-[var(--secondary-bg-color)]"}>:</p>

      <input
        type={"number"}
        defaultValue={focusTimer.getMinutes}
        placeholder={"M"}
        min={0}
        max={60}
        onChange={(e) => { setNewTime([time[0], parseInt(e.target.value), time[2]]) }}
        className={"w-14 pl-2 bg-[var(--secondary-bg-color)] rounded-lg"}
      />
      <p className={"text-right text-[var(--secondary-bg-color)]"}>:</p>

      <input
        type={"number"}
        defaultValue={focusTimer.getSeconds}
        placeholder={"S"}
        min={0}
        max={60}
        onChange={(e) => { setNewTime([time[0], time[1], parseInt(e.target.value)]) }}
        className={"w-14 pl-2 bg-[var(--secondary-bg-color)] rounded-lg"}
      />
    </div>
  )
}

export function BreakTimerInput({time, setNewTime}: TimerInputProps) {
  const breakTimer = useTimerStore(state => state.breakTimer);

  return (
    <div className={"flex flex-row gap-1 text-[var(--text-color)]"}>
      <input
        type={"number"}
        defaultValue={breakTimer.getHours}
        placeholder={"H"}
        min={0}
        max={60}
        onChange={(e) => { setNewTime([parseInt(e.target.value), time[1], time[2]]) }}
        className={"w-14 pl-2 bg-[var(--secondary-bg-color)] rounded-lg"}
      />
      <p className={"text-right text-[var(--secondary-bg-color)]"}>:</p>

      <input
        type={"number"}
        defaultValue={breakTimer.getMinutes}
        placeholder={"M"}
        min={0}
        max={60}
        onChange={(e) => { setNewTime([time[0], parseInt(e.target.value), time[2]]) }}
        className={"w-14 pl-2 bg-[var(--secondary-bg-color)] rounded-lg"}
      />
      <p className={"text-right text-[var(--secondary-bg-color)]"}>:</p>

      <input
        type={"number"}
        defaultValue={breakTimer.getSeconds}
        placeholder={"S"}
        min={0}
        max={60}
        onChange={(e) => { setNewTime([time[0], time[1], parseInt(e.target.value)]) }}
        className={"w-14 pl-2 bg-[var(--secondary-bg-color)] rounded-lg"}
      />
    </div>
  )
}