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
      <motion.div
        className={"w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-[var(--accent-color)] overflow-hidden"}
        transition={{duration: 0.7}}
        animate={{rotateY: showSettings ? 180 : 0}}
      >
        <motion.svg width="100%" height="100%" id="svg" viewBox="0 0 1440 1200" xmlns="http://www.w3.org/2000/svg"
             className="transition duration-300 ease-in-out delay-150 scale-y-120 translate-y-[100px]"
             transition={{duration: 0.1}}
             animate={{opacity: showSettings ? 0 : 100}}>
          <defs>
            <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="5%" stop-color="#878787"></stop>
              <stop offset="95%" stop-color="#878787"></stop>
            </linearGradient>
          </defs>
          <path
            d="M 0,600 L 0,150 C 106.65071770334927,176.3444976076555 213.30143540669854,202.68899521531102 314,180 C 414.69856459330146,157.31100478468898 509.444976076555,85.58851674641147 602,96 C 694.555023923445,106.41148325358853 784.9186602870813,198.9569377990431 877,217 C 969.0813397129187,235.0430622009569 1062.8803827751199,178.58373205741626 1157,155 C 1251.1196172248801,131.41626794258374 1345.55980861244,140.7081339712919 1440,150 L 1440,1200 L 0,1200 Z"
            stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="0.2"
            className="transition-all duration-300 ease-in-out delay-150 path-0"></path>

          <defs>
            <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="5%" stop-color="#878787"></stop>
              <stop offset="95%" stop-color="#878787"></stop>
            </linearGradient>
          </defs>
          <path
            d="M 0,600 L 0,350 C 106.6602870813397,335.0430622009569 213.3205741626794,320.0861244019139 292,302 C 370.6794258373206,283.9138755980861 421.37799043062205,262.6985645933014 524,290 C 626.622009569378,317.3014354066986 781.1674641148325,393.1196172248804 904,410 C 1026.8325358851675,426.8803827751196 1117.952153110048,384.82296650717706 1202,365 C 1286.047846889952,345.17703349282294 1363.023923444976,347.58851674641147 1440,350 L 1440,1200 L 0,1200 Z"
            stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="0.20"
            className="transition-all duration-300 ease-in-out delay-150 path-1"></path>
        </motion.svg>
      </motion.div>

      <motion.div
        className={`${showSettings ? 'hidden' : ''}`}
        transition={{delay: 0.3, duration: 0.5}}
        animate={{opacity: showSettings ? 0 : 100}}
      >
        <p
          className={"text-2xl absolute top-0 right-1/2 translate-x-1/2 translate-y-[100%] text-[var(--secondary-bg-color)]"}>FOCUS</p>
        <p
          className={"text-6xl absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 text-[var(--secondary-bg-color)]"}>00:00</p>

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

        <div
          className={"flex flex-row gap-4 justify-center items-center absolute bottom-0 right-1/2 translate-x-1/2 -translate-y-[250%]"}>
          <button className={"text-[var(--secondary-bg-color)] sm:text-xl"}>SAVE</button>
          <button
            className={"text-[var(--secondary-bg-color)] sm:text-xl"}
            onClick={() => setShowSettings(!showSettings)}
          >
            DISCARD
          </button>
        </div>


      </motion.div>
    </div>
);
}