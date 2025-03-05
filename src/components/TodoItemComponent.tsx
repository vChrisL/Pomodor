import {TodoItem as TodoItemType} from "../classes/TodoItem.ts";
import {useState} from "react";

type TodoItemProps = {
  item: TodoItemType
}

export function TodoItem({item}: TodoItemProps) {
  const [isChecked, setIsChecked] = useState<boolean>(item.getIsComplete);

  return (
    <>
    <div
      className={`
        flex flex-row gap-2 p-1 items-start rounded-lg
        hover:bg-[var(--primary-bg-color)]
        dark:hover:bg-[var(--dark-primary-bg-color)]
      `}
    >
      <input
        className={"mt-2"}
        type={"checkbox"}
        defaultChecked={false}
        onChange={(e) => {
          setIsChecked(e.target.checked);
        }}
      />
      <p className={`text-lg text-left ${isChecked ? 'line-through' : ''}`}>{item.getTitle}</p>
    </div>
    <hr className={"text-[var(--primary-bg-color)] brightness-90"}/>
    </>
  )
}