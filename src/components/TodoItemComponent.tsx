import {TodoItem as TodoItemType} from "../classes/TodoItem.ts";
import {useRef, useState} from "react";
import {useOnClickOutside} from "../util/onClickOutside.tsx";
import {useTodoListStore} from "../stores/TodoListStore.ts";

type TodoItemProps = {
  item: TodoItemType
}

export function TodoItem({item}: TodoItemProps) {
  const [isChecked, setIsChecked] = useState<boolean>(item.IsComplete);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const [modifiedTitle, setModifiedTitle] = useState<string>("");

  const modifyItemTitle = useTodoListStore(state => state.modifyItemTitle);
  const modifyItemCheckState = useTodoListStore(state => state.modifyItemCheckState);
  const deleteItem = useTodoListStore(state => state.deleteItem);

  const formRef = useRef(null);
  useOnClickOutside(formRef, (): void => {
    setIsEditing(false)
  });

  /**
   * Handle saving the item title.
   */
  function handleSave(): void {
    modifyItemTitle(item, modifiedTitle);
    setIsEditing(false);
  }

  /**
   * Handle deleting the item.
   */
  function handleDelete(): void {
    deleteItem(item);
    setIsEditing(false);
  }

  /**
   * Handles ENTER and ESCAPE keydown events.
   * @param e Keyboard event.
   */
  function handleKeydown(e: React.KeyboardEvent<HTMLFormElement>): void {
    if (e.key === "Enter" && !e.shiftKey) {
      handleSave();
    }
    else if (e.key === "Delete") {
      handleDelete();
    }
    else if (e.key === "Escape") {
      setIsEditing(false);
    }
  }
  return(
    <>
      {!isEditing && (
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
              defaultChecked={item.IsComplete}
              onChange={(e) => {
                setIsChecked(e.target.checked);
                modifyItemCheckState(item, e.target.checked);
              }}
            />
            <p
              className={`text-lg text-left w-full ${isChecked ? 'line-through' : ''}`}
              onClick={(): void => setIsEditing(true)}
            >
              {item.Title}
            </p>
          </div>
          <hr className={"text-[var(--primary-bg-color)] brightness-90"}/>
        </>
      )}

      {isEditing && (
        <form
          ref={formRef}
          className={"flex flex-col gap-1 p-2"}
          onKeyDown={(e) => handleKeydown(e)}
        >
          <textarea
            className={"w-full p-2 rounded-lg bg-[var(--primary-bg-color)] dark:bg-[var(--dark-primary-bg-color)]"}
            autoFocus={true}
            placeholder={"Add an item"}
            defaultValue={item.Title}
            onChange={(e): void => setModifiedTitle(e.target.value)}
          />
          <div className={"flex flex-row justify-between"}>
            <div className={"flex flex-row gap-2"}>
              <button
                onClick={(e): void => {
                  e.preventDefault();
                  handleSave();
                }}
                className={`
                  w-fit py-1 px-2 bg-[var(--accent-color)] rounded-lg
                  hover:brightness-90
                  active:brightness-80
                `}
              >
                Save
              </button>
              <button
                onClick={(): void => setIsEditing(false)}
                className={`
                      w-fit py-1 px-2 bg-[var(--accent-color)] rounded-lg
                      hover:brightness-90
                      active:brightness-80
                    `}
              >
                Cancel
              </button>
            </div>
            <button
              onClick={(e): void => {
                e.preventDefault();
                handleDelete();
              }}
              className={`
                    w-fit py-1 px-2 bg-[var(--accent-color)] rounded-lg
                    hover:brightness-90
                    active:brightness-80
                  `}
            >
              Delete
            </button>
          </div>
        </form>
      )}
    </>
  )
}