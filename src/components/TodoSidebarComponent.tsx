import {TodoItem} from "./TodoItemComponent.tsx";
import {TodoItem as TodoItemType} from "../classes/TodoItem.ts";
import {ThemeButton} from "./ToggleThemeComponent.tsx";
import {useTodoListStore} from "../stores/TodoListStore.ts";
import {useRef, useState} from "react";
import {useOnClickOutside} from "../util/onClickOutside.tsx";


export function TodoSidebar() {
  // To-do variables
  const [todoItemTitle, setTodoItemTitle] = useState<string>("");
  const todoItems = useTodoListStore(state => state.todoItems);
  const addTodoItem = useTodoListStore(state => state.addItem);

  const [isCreatingItem, setIsCreatingItem] = useState<boolean>(false);

  const formRef = useRef(null);
  useOnClickOutside(formRef, (): void => {
    setIsCreatingItem(false)
  });

  /**
   * Handles adding new to-do item
   */
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
    <aside className={`
        transition-colors duration-150 ease-in
        hidden flex-col justify-between w-1/5 bg-[var(--secondary-bg-color)]
        dark:bg-[var(--dark-secondary-bg-color)] dark:text-[var(--dark-text-color)]
        lg:flex lg:p-4
    `}>
      <div className={"h-11/12 overflow-y-auto"}>
        <h1 className={"text-2xl pb-4"}>TO-DO</h1>
        <div className={"flex flex-col gap-1"}>
          {
            todoItems.map((item) =>
              <TodoItem key={item.Key + `${Math.random() * 1000}`} item={item}/>
            )
          }
          {isCreatingItem && (
            <form
              ref={formRef}
              className={"flex flex-col gap-1 p-2"}
            >
              <textarea
                className={"w-full p-2 rounded-lg bg-[var(--primary-bg-color)] dark:bg-[var(--dark-primary-bg-color)]"}
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
            </form>
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