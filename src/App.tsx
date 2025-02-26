import './App.css'
import {TimerComponent} from "./components/TimerComponent.tsx";
import {Button} from "./components/Button.tsx";
import {FooterBar} from "./components/FooterComponent.tsx";

function App() {

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
      `}>
        <h1 className={"text-2xl"}>POMODORO</h1>

        <div id={"timerContainer"} className={"flex flex-col justify-center items-center gap-8"}>
          <TimerComponent></TimerComponent>

          <div className={"flex flex-row justify-center gap-8"}>
            <Button buttonText={"START"}></Button>
            <Button buttonText={"STOP"}></Button>
          </div>
        </div>

        <div className={`
          hidden
          sm:block
        `}>
          Counter cards go here
        </div>
      </main>

      <FooterBar></FooterBar>
    </>
  );
}

export default App
