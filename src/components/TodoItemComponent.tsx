import {TodoItem as TodoItemType} from "../classes/TodoItem.ts";
import {useState} from "react";

type TodoItemProps = {
  item: TodoItemType
}

export function TodoItem({item}: TodoItemProps) {
  const [isChecked, setIsChecked] = useState<boolean>(item.getIsComplete);

  return (
    <div className={"flex flex-row gap-2 p-1 items-start border-t border-gray-400"}>
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
  )
}