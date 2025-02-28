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
import {useInterval} from "./util/UseInterval.tsx";

function App() {
  const displayTodoMenu: boolean = useTodoMenuStore(state => state.displayTodoMenu);


  const focusTime = useTimerStore(state => state.focusTimer);

  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [timerInterval, setTimerInterval] = useState<number>();
  const [time, setTime] = useState<Time>(new Time(focusTime.getHours,focusTime.getMinutes,focusTime.getSeconds));

  // Update time when focusTime state changes
  useEffect((): void => {
    setTime(new Time(focusTime.getHours, focusTime.getMinutes, focusTime.getSeconds))
  }, [focusTime]);


  // Handles timer running logic
  const date: Date = new Date();
  useInterval(() => {
    if(!isTimerRunning) return;

    const tmpTime = new Time(time.getHours, time.getMinutes, time.getSeconds);

    if(new Date().getSeconds() - date.getSeconds() >= 1) tmpTime.seconds = tmpTime.getSeconds - 1;
    // tmpTime.seconds = tmpTime.getSeconds - 12;
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
