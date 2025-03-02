import './App.css'
import {TimerComponent} from "./components/TimerComponent.tsx";
import {Button} from "./components/Button.tsx";
import {FooterBar} from "./components/FooterComponent.tsx";
import {CounterCard} from "./components/CounterCardComponent.tsx";
import {useStatsMenuStore, useTodoMenuStore} from "./stores/MenuStore.ts";
import {MobileTodoMenu} from "./components/TodoMenuComponent.tsx";
import {useEffect, useState} from "react";
import {Time} from "./classes/Time.ts";
import {useTimerStore} from "./stores/TimerStore.ts";
import {useInterval} from "./util/UseInterval.tsx";
import {useStatisticsStore} from "./stores/PomodoroStatisticsStore.ts";
import {MobileStatsMenu} from "./components/StatsMenuComponent.tsx";
import {Reminder} from "./components/ReminderComponent.tsx";
import {ThemeButton} from "./components/ToggleThemeComponent.tsx";

function App() {
  const displayTodoMenu: boolean = useTodoMenuStore(state => state.displayMenu);
  const displayStatsMenu: boolean = useStatsMenuStore(state => state.displayMenu);


  // Timer variables
  const focusTime = useTimerStore(state => state.focusTimer);
  const breakTime = useTimerStore(state => state.breakTimer);

  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [time, setTime] = useState<Time>(new Time(focusTime.getHours,focusTime.getMinutes,focusTime.getSeconds));
  const [isFocusPeriod, setIsFocusPeriod] = useState<boolean>(true);

  // Pomodoro statistics
  const incrementPeriod = useStatisticsStore(state => state.incrementPeriod);
  const currentFocusPeriods = useStatisticsStore(state => state.currentFocusPeriods);
  const currentBreakPeriods = useStatisticsStore(state => state.currentBreakPeriods);
  const totalFocusPeriods = useStatisticsStore(state => state.totalFocusPeriods);
  const totalBreakPeriods = useStatisticsStore(state => state.totalBreakPeriods);

  // Update time when focusTime state changes
  useEffect((): void => {
    setTime(new Time(focusTime.getHours, focusTime.getMinutes, focusTime.getSeconds))
  }, [focusTime]);


  const date: Date = new Date();
  const [progress, setProgress] = useState<number>(0);

  // Handles timer running logic
  useInterval(() => {
    if(!isTimerRunning) return;

    const tmpTime = new Time(time.getHours, time.getMinutes, time.getSeconds);

    // if(new Date().getSeconds() - date.getSeconds() >= 1) tmpTime.seconds = tmpTime.getSeconds - 1;

    // Switch timers when current timer is over
    if(tmpTime.isTimerOver) {
      const toggledFocusPeriod = !isFocusPeriod;
      setIsFocusPeriod(toggledFocusPeriod);

      setTimer(toggledFocusPeriod);
      setProgress(0);

      incrementPeriod(isFocusPeriod);
      return;
    }

    tmpTime.seconds = tmpTime.getSeconds - 12;
    calculateSVGProgress();

    if(tmpTime.getSeconds <= 0 && tmpTime.getMinutes > 0) {
      tmpTime.seconds = 59;
      tmpTime.minutes = tmpTime.getMinutes - 1;
    }
    if(tmpTime.getMinutes <= 0 && tmpTime.getHours > 0) {
      tmpTime.minutes = 59;
      tmpTime.hours = tmpTime.getHours - 1;
    }

    setTime(tmpTime);
  }, 100);

  /**
   * Handles updating the timer to match focus or break period.
   * @param state isFocusPeriod state.
   */
  function setTimer(state: boolean): void {
    if(state) {
      setTime(new Time(focusTime.getHours, focusTime.getMinutes, focusTime.getSeconds))
    }
    else {
      setTime(new Time(breakTime.getHours, breakTime.getMinutes, breakTime.getSeconds))
    }
  }

  /**
   * Handles animating the SVG wave progress indicator according to timer progress.
   */
  function calculateSVGProgress() {
    const y = (time.getHours * 3600) + (time.getMinutes * 60) + time.getSeconds;

    if(isFocusPeriod) {
      const x = (focusTime.getHours * 3600) + (focusTime.getMinutes * 60) + focusTime.getSeconds;
      const progPercent = 1 - (y/x);
      setProgress(15 * progPercent);
    }
    else {
      const x = (breakTime.getHours * 3600) + (breakTime.getMinutes * 60) + breakTime.getSeconds;
      const progPercent = 1 - (y/x);
      setProgress(15 * progPercent);
    }
  }

  return (
    <>
      <aside className={`
        transition-colors duration-150 ease-in
        hidden flex-col justify-between w-1/5 bg-[var(--secondary-bg-color)] 
        dark:bg-[var(--dark-secondary-bg-color)] dark:text-[var(--dark-text-color)]
        sm:flex sm:p-4
      `}>
        <div>
          <h1 className={"text-2xl"}>TODO</h1>
          <div>
            to-do contents
          </div>
        </div>
        <ThemeButton/>
      </aside>

      <main className={`
        transition-colors duration-150 ease-in
        flex flex-col gap-16 dark:bg-[var(--dark-primary-bg-color)] dark:text-[var(--dark-text-color)]
        sm:p-4 sm:w-[calc(100%-20%)] sm:bg-[var(--primary-bg-color)]
        ${displayTodoMenu || displayStatsMenu ? 'hidden' : ''}
      `}>
        <div className={"flex flex-col gap-4"}>
          <h1 className={"text-2xl"}>POMODORO</h1>
          <Reminder isFocusPeriod={isFocusPeriod}/>
        </div>

        <div id={"timerContainer"} className={"flex flex-col justify-center items-center gap-8"}>
          <TimerComponent time={time} isFocusPeriod={isFocusPeriod} progress={progress}></TimerComponent>

          <div className={"flex flex-row justify-center gap-8"}>
            <Button
              buttonText={"START"}
              onClickEvent={ (): void => setIsTimerRunning(true) }/>
            <Button
              buttonText={"STOP"}
              onClickEvent={ (): void => setIsTimerRunning(false) }
              styles={`${isTimerRunning ? '' : 'hidden'}`}/>
            <Button
              buttonText={"RESET"}
              onClickEvent={ (): void => { setTimer(isFocusPeriod); setProgress(0) } }
              styles={`${!isTimerRunning && !(time.equals(focusTime) || time.equals(breakTime)) ? '' : 'hidden'}`}/>
            <Button
              buttonText={"SWITCH"}
              onClickEvent={ (): void => {
                setIsFocusPeriod(!isFocusPeriod);
                setTimer(!isFocusPeriod);
                setProgress(0);
              }}
              styles={`${!isTimerRunning && (time.equals(focusTime) || time.equals(breakTime)) ? '' : 'hidden'}`}/>
          </div>
        </div>

        <div className={`
          hidden flex-row justify-center items-center gap-8 overflow-x-auto py-2
          sm:flex
        `}>
          <CounterCard message={"Current Focus Periods"} count={currentFocusPeriods}></CounterCard>
          <CounterCard message={"Current Break Periods"} count={currentBreakPeriods}></CounterCard>
          <CounterCard message={"Total Focus Periods"} count={totalFocusPeriods}></CounterCard>
          <CounterCard message={"Total Break Periods"} count={totalBreakPeriods}></CounterCard>
        </div>
      </main>

      {displayTodoMenu && <MobileTodoMenu></MobileTodoMenu>}
      {displayStatsMenu && <MobileStatsMenu></MobileStatsMenu>}

      <FooterBar></FooterBar>
    </>
  );
}

export default App
