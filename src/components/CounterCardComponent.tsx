type CounterProps = {
  message: string,
  count: number
}

export function CounterCard({message, count}: CounterProps) {
  return (
    <div className={`
      flex flex-col gap-3 w-64 h-32 p-4 rounded-lg shadow-md shadow-gray-400 bg-[var(--accent-color)] text-[var(--secondary-bg-color)]
      dark:bg-[var(--dark-accent-color)]
      lg:w-64 lg:h-40 lg:gap-5
    `}>
      <h1 className={"text-xl"}>{message}</h1>
      <hr className={"text-[var(--primary-bg-color)]"}/>
      <p className={"text-4xl"}>{count}</p>
    </div>
  )
}