type CounterProps = {
  message: string,
  count: number
}

export function CounterCard({message, count}: CounterProps) {
  return (
    <div className={"flex flex-col gap-5 w-64 h-40 p-4 rounded-lg shadow-md shadow-gray-400 bg-[var(--accent-color)] text-[var(--secondary-bg-color)]"}>
      <h1 className={"text-xl"}>{message}</h1>
      <hr className={"text-[var(--primary-bg-color)]"}/>
      <p className={"text-4xl"}>{count}</p>
    </div>
  )
}