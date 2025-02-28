import './App.css'
import {TimerComponent} from "./components/TimerComponent.tsx";
import {Button} from "./components/Button.tsx";
import {FooterBar} from "./components/FooterComponent.tsx";
import {CounterCard} from "./components/CounterCardComponent.tsx";
import {useTodoMenuStore} from "./stores/MenuStore.ts";
import {MobileTodoMenu} from "./components/TodoMenuComponent.tsx";
import {useEffect, useState} from "react";
import {Time} from "./classes/Time.ts";
import {useTimerStore} from "./stores/TimerStore.ts";

function App() {
  const displayTodoMenu: boolean = useTodoMenuStore(state => state.displayTodoMenu);


  const focusTime = useTimerStore(state => state.focusTimer);

  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [timerInterval, setTimerInterval] = useState<number>();
  const [time, setTime] = useState<Time>(new Time(focusTime.getHours,focusTime.getMinutes,focusTime.getSeconds));

  // Update time when focusTime state changes
  useEffect((): void => {
    setTime(new Time(focusTime.getHours,focusTime.getMinutes,focusTime.getSeconds))
  }, [focusTime]);

  /**
   * Handles running timer logic
   */
  function runTimer(): void {
    console.log("tick")
  }

  // Start stop time when isTimerRunning state changes
  useEffect((): void => {
    if(isTimerRunning) {
      setTimerInterval(setInterval(runTimer, 1000));
    }
    else {
      clearInterval(timerInterval);
    }
  }, [isTimerRunning])

  return (
    <>
      <aside className={`
        hidden w-1/5 bg-[var(--secondary-bg-color)]
        sm:block sm:p-4
      `}>
        <h1 className={"text-2xl"}>TODO</h1>
      </aside>

      <main className={`
        flex flex-col gap-24 
        sm:p-4 sm:w-[calc(100%-20%)] sm:bg-[var(--primary-bg-color)]
        ${displayTodoMenu ? 'hidden' : ''}
      `}>
        <h1 className={"text-2xl"}>POMODORO</h1>

        <div id={"timerContainer"} className={"flex flex-col justify-center items-center gap-8"}>
          <TimerComponent time={time}></TimerComponent>

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
              onClickEvent={ (): void => setTime(new Time(focusTime.getHours, focusTime.getMinutes, focusTime.getSeconds)) }
              styles={`${isTimerRunning ? 'hidden' : ''}`}/>
          </div>
        </div>

        <div className={`
          hidden flex-row justify-center items-center gap-8 overflow-x-auto py-2
          sm:flex
        `}>
          <CounterCard message={"Current Focus Periods"} count={3}></CounterCard>
          <CounterCard message={"Current Break Periods"} count={2}></CounterCard>
          <CounterCard message={"Total Focus Periods"} count={25}></CounterCard>
          <CounterCard message={"Total Break Periods"} count={20}></CounterCard>
        </div>
      </main>

      {displayTodoMenu && <MobileTodoMenu></MobileTodoMenu>}

      <FooterBar></FooterBar>
    </>
  );
}

export default App
