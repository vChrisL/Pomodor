import {TodoItem} from "./TodoItemComponent.tsx";
import {ThemeButton} from "./ToggleThemeComponent.tsx";
import {useTodoListStore} from "../stores/TodoListStore.ts";


export function TodoSidebar() {
  // To-do variables
  const todoItems = useTodoListStore(state => state.todoItems);
  const addTodoItem = useTodoListStore(state => state.addItem);


  return (
    <aside className={`
        transition-colors duration-150 ease-in
        hidden flex-col justify-between w-1/5 bg-[var(--secondary-bg-color)] 
        dark:bg-[var(--dark-secondary-bg-color)] dark:text-[var(--dark-text-color)]
        sm:flex sm:p-4
    `}>
      <div>
        <h1 className={"text-2xl pb-4"}>TODO</h1>
        <div className={"flex flex-col gap-1"}>
          {
            todoItems.map((item) =>
              <TodoItem key={item.getKey} item={item}/>
            )
          }
          <button
            onClick={(): void => {
              console.log("add item")
            }}
            className={`
                w-full p-2 bg-[var(--accent-color)] rounded-lg
                hover:brightness-90
                active:brightness-80
              `}>
            Add an item
          </button>
        </div>
      </div>
      <ThemeButton/>
    </aside>
  )
}