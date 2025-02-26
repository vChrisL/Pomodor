export function FocusTimerInput() {
  return (
    <div className={"flex flex-row gap-1"}>
      <input
        type={"number"}
        defaultValue={0}
        placeholder={"H"}
        className={"w-14 pl-2 bg-[var(--secondary-bg-color)] rounded-lg"}
      />
      <p className={"text-right text-[var(--secondary-bg-color)]"}>:</p>

      <input
        type={"number"}
        defaultValue={25}
        placeholder={"M"}
        className={"w-14 pl-2 bg-[var(--secondary-bg-color)] rounded-lg"}
      />
      <p className={"text-right text-[var(--secondary-bg-color)]"}>:</p>

      <input
        type={"number"}
        defaultValue={0}
        placeholder={"S"}
        className={"w-14 pl-2 bg-[var(--secondary-bg-color)] rounded-lg"}
      />
    </div>
  )
}

export function BreakTimerInput() {
  return (
    <div className={"flex flex-row gap-1"}>
      <input
        type={"number"}
        defaultValue={0}
        placeholder={"H"}
        className={"w-14 pl-2 bg-[var(--secondary-bg-color)] rounded-lg"}
      />
      <p className={"text-right text-[var(--secondary-bg-color)]"}>:</p>

      <input
        type={"number"}
        defaultValue={5}
        placeholder={"M"}
        className={"w-14 pl-2 bg-[var(--secondary-bg-color)] rounded-lg"}
      />
      <p className={"text-right text-[var(--secondary-bg-color)]"}>:</p>

      <input
        type={"number"}
        defaultValue={0}
        placeholder={"S"}
        className={"w-14 pl-2 bg-[var(--secondary-bg-color)] rounded-lg"}
      />
    </div>
  )
}