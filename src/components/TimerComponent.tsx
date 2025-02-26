import {BreakTimerInput, FocusTimerInput} from "./TimerInputComponent.tsx";
import {useState} from "react";
import {motion} from "framer-motion";

export function TimerComponent() {
  const [showSettings, setShowSettings] = useState<boolean>(false);

  function handleSaveSettings() {
    throw new Error("Not implemented");
  }

  return (
    <div className={"relative"}>
      <motion.svg
        className={`
          w-80 h-80
          sm:w-96 sm:h-96
        `}
        transition={{duration: 0.7}}
        animate={{rotateY: showSettings ? 180 : 0}}
      >
        <circle className={"fill-[var(--accent-color)]"} cx="50%" cy="50%" r="50%"/>
      </motion.svg>

      <motion.div
        className={`${showSettings ? 'hidden' : ''}`}
        transition={{delay: 0.3, duration: 0.5}}
        animate={{opacity: showSettings ? 0 : 100}}
      >
        <p className={"text-2xl absolute top-0 right-1/2 translate-x-1/2 translate-y-[100%] text-[var(--secondary-bg-color)]"}>FOCUS</p>
        <p className={"text-6xl absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 text-[var(--secondary-bg-color)]"}>00:00</p>

        <button
          className={"text-5xl absolute bottom-0 right-1/2 translate-x-1/2 -translate-y-[150%] text-[var(--secondary-bg-color)]"}
          onClick={() => setShowSettings(!showSettings)}
        >
          ...
        </button>
      </motion.div>

      <motion.div
        className={`${showSettings ? '' : 'hidden'}`}
        transition={{delay: 0.3, duration: 0.5}}
        animate={{opacity: showSettings ? 100 : 0}}
      >
        <div
          className={"flex flex-col gap-2 justify-center items-center absolute top-0 right-1/2 translate-x-1/2 translate-y-[100%]"}>
          <p className={"text-[var(--secondary-bg-color)] sm:text-xl"}>Focus Period</p>
          <FocusTimerInput/>
        </div>

        <div
          className={"flex flex-col gap-2 justify-center items-center absolute top-0 right-1/2 translate-x-1/2 translate-y-[250%]"}>
          <p className={"text-[var(--secondary-bg-color)] sm:text-xl"}>Break Period</p>
          <BreakTimerInput/>
        </div>

        <div className={"flex flex-row gap-4 justify-center items-center absolute bottom-0 right-1/2 translate-x-1/2 -translate-y-[250%]"}>
          <button className={"text-[var(--secondary-bg-color)] sm:text-xl"}>SAVE</button>
          <button
            className={"text-[var(--secondary-bg-color)] sm:text-xl"}
            onClick={() => setShowSettings(!showSettings)}
          >
            DISCARD
          </button>
        </div>


      </motion.div >
    </div>
  );
}