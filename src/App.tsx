import './App.css'
import {TimerComponent} from "./components/TimerComponent.tsx";
import {Button} from "./components/Button.tsx";
import {FooterBar} from "./components/FooterComponent.tsx";

function App() {

  return (
    <>
      <main className={"flex flex-col gap-24"}>
        <h1 className={"text-2xl"}>POMODORO</h1>

        <div id={"timerContainer"} className={"flex flex-col justify-center items-center gap-8"}>
          <TimerComponent></TimerComponent>

          <div className={"flex flex-row justify-center gap-8"}>
            <Button buttonText={"START"}></Button>
            <Button buttonText={"STOP"}></Button>
          </div>
        </div>
      </main>

      <FooterBar></FooterBar>
    </>
  );
}

export default App
