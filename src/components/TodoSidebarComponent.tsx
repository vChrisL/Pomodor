import {TodoItem} from "./TodoItemComponent.tsx";
import {ThemeButton} from "./ToggleThemeComponent.tsx";
import {useTodoListStore} from "../stores/TodoListStore.ts";
import {useState} from "react";


export function TodoSidebar() {
  // To-do variables
  const todoItems = useTodoListStore(state => state.todoItems);
  const addTodoItem = useTodoListStore(state => state.addItem);

  const [isCreatingItem, setIsCreatingItem] = useState<boolean>(false);

  return (
    <aside className={`
        transition-colors duration-150 ease-in
        hidden flex-col justify-between w-1/5 bg-[var(--secondary-bg-color)] 
        dark:bg-[var(--dark-secondary-bg-color)] dark:text-[var(--dark-text-color)]
        sm:flex sm:p-4
    `}>
      <div>
        <h1 className={"text-2xl pb-4"}>TO-DO</h1>
        <div className={"flex flex-col gap-1"}>
          {
            todoItems.map((item) =>
              <TodoItem key={item.getKey} item={item}/>
            )
          }
          {isCreatingItem && (
            <div className={"flex flex-col gap-1 p-2"}>
              <textarea
                className={"w-full p-2 rounded-lg bg-[var(--primary-bg-color)]"}
                placeholder={"Add an item"}
              />
              <div className={"flex flex-row gap-2"}>
                <button
                  onClick={() => {
                    console.log("create new item")
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
                  onClick={ (): void => setIsCreatingItem(false) }
                  className={`
                    w-fit py-1 px-2 bg-[var(--accent-color)] rounded-lg
                    hover:brightness-90
                    active:brightness-80
                  `}
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          {!isCreatingItem && (
            <button
              onClick={ (): void => setIsCreatingItem(true) }
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
      <ThemeButton/>
    </aside>
  )
}