import {BreakTimerInput, FocusTimerInput} from "./TimerInputComponent.tsx";
import {useState} from "react";

export function TimerComponent() {
  const [showSettings, setShowSettings] = useState<boolean>(false);

  function handleSaveSettings() {
    throw new Error("Not implemented");
  }

  return (
    <div className={"relative"}>
      <svg className={"w-80 h-80"}>
        <circle className={"fill-[var(--accent-color)]"} cx="50%" cy="50%" r="50%"/>
      </svg>

      <div className={`${showSettings ? 'hidden' : ''}`}>
        <p className={"text-2xl absolute top-0 right-1/2 translate-x-1/2 translate-y-[100%] text-[var(--secondary-bg-color)]"}>FOCUS</p>
        <p className={"text-6xl absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 text-[var(--secondary-bg-color)]"}>00:00</p>

        <button
          className={"text-5xl absolute bottom-0 right-1/2 translate-x-1/2 -translate-y-[150%] text-[var(--secondary-bg-color)]"}
          onClick={() => setShowSettings(!showSettings)}
        >
          ...
        </button>
      </div>

      <div className={`${showSettings ? '' : 'hidden'}`}>
        <div
          className={"flex flex-col gap-2 justify-center items-center absolute top-0 right-1/2 translate-x-1/2 translate-y-[100%]"}>
          <p className={"text-[var(--secondary-bg-color)]"}>Focus Period</p>
          <FocusTimerInput/>
        </div>

        <div
          className={"flex flex-col gap-2 justify-center items-center absolute top-0 right-1/2 translate-x-1/2 translate-y-[250%]"}>
          <p className={"text-[var(--secondary-bg-color)]"}>Break Period</p>
          <BreakTimerInput/>
        </div>

        <div className={"flex flex-row gap-4 justify-center items-center absolute bottom-0 right-1/2 translate-x-1/2 -translate-y-[250%]"}>
          <button className={"text-[var(--secondary-bg-color)]"}>SAVE</button>
          <button
            className={"text-[var(--secondary-bg-color)]"}
            onClick={() => setShowSettings(!showSettings)}
          >
            DISCARD
          </button>
        </div>


      </div>
    </div>
  );
}