import {TodoItem as TodoItemType} from "../classes/TodoItem.ts";

type TodoItemProps = {
  item: TodoItemType
}

export function TodoItem({item}: TodoItemProps) {
  return (
    <div className={"flex flex-row gap-2 items-start"}>
      <input
        className={"mt-2"}
        type={"checkbox"}
        defaultChecked={false}
      />
      <p className={"text-lg text-left"}>{item.getTitle}</p>
    </div>
  )
}