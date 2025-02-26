export function TimerComponent() {
  return (
    <div className={"relative"}>
      <svg className={"w-80 h-80"}>
        <circle className={"fill-[var(--accent-color)]"} cx="50%" cy="50%" r="50%"/>
      </svg>

      <div>
        <p className={"text-2xl absolute top-0 right-1/2 translate-x-1/2 translate-y-[100%] text-[var(--secondary-bg-color)]"}>FOCUS</p>
        <p className={"text-6xl absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 text-[var(--secondary-bg-color)]"}>00:00</p>

        <button className={"text-5xl absolute bottom-0 right-1/2 translate-x-1/2 -translate-y-[150%] text-[var(--secondary-bg-color)]"}>...</button>
      </div>


    </div>
  );
}