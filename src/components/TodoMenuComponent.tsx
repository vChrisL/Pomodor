import {TodoItem} from "./TodoItemComponent.tsx";
import {useRef, useState} from "react";
import {useTodoListStore} from "../stores/TodoListStore.ts";
import {useOnClickOutside} from "../util/onClickOutside.tsx";
import {TodoItem as TodoItemType} from "../classes/TodoItem.ts";

export function MobileTodoMenu() {
  const [todoItemTitle, setTodoItemTitle] = useState<string>("");
  const todoItems = useTodoListStore(state => state.todoItems);
  const addTodoItem = useTodoListStore(state => state.addItem);

  const [isCreatingItem, setIsCreatingItem] = useState<boolean>(false);

  const formRef = useRef(null);
  useOnClickOutside(formRef, (): void => {
    setIsCreatingItem(false)
  });

  function handleAddItem(): void {
    try {
      const item: TodoItemType = new TodoItemType(todoItemTitle);
      addTodoItem(item);
      setIsCreatingItem(false);
    } catch {
      return;
    }
  }

  return (
    <div className={"w-full h-full p-4 z-10"}>
      <div className={"h-full overflow-y-auto"}>
        <h1 className={"text-2xl pb-4"}>TO-DO</h1>
        <div className={"flex flex-col gap-1"}>
          {
            todoItems.map((item) =>
              <TodoItem key={item.Key} item={item}/>
            )
          }
          {isCreatingItem && (
            <form
              ref={formRef}
              className={"flex flex-col gap-1 p-2"}
            >
              <textarea
                className={"w-full p-2 rounded-lg bg-[var(--secondary-bg-color)] dark:bg-[var(--dark-secondary-bg-color)]"}
                autoFocus={true}
                placeholder={"Add an item"}
                onChange={(e): void => setTodoItemTitle(e.target.value)}
              />
              <div className={"flex flex-row gap-2"}>
                <button
                  onClick={(e): void => {
                    e.preventDefault();
                    handleAddItem();
                  }}
                  className={`
                    w-fit py-1 px-2 bg-[var(--accent-color)] rounded-lg
                    hover:brightness-90
                    active:brightness-80
                  `}
                >
                  Add
                </button>
                <button
                  onClick={(): void => setIsCreatingItem(false)}
                  className={`
                    w-fit py-1 px-2 bg-[var(--accent-color)] rounded-lg
                    hover:brightness-90
                    active:brightness-80
                  `}
                >
                  Cancel
                </button>
              </div>
            </form>
          )}

          {!isCreatingItem && (
            <button
              onClick={(): void => setIsCreatingItem(true)}
              className={`
                  w-full p-2 bg-[var(--accent-color)] rounded-lg
                  hover:brightness-90
                  active:brightness-80
              `}
            >
              Add an item
            </button>
          )}
        </div>
      </div>
    </div>
  )
}