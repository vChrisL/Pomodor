import {TodoItem as TodoItemType} from "../classes/TodoItem.ts";
import {useRef, useState} from "react";
import {useOnClickOutside} from "../util/onClickOutside.tsx";

type TodoItemProps = {
  item: TodoItemType
}

export function TodoItem({item}: TodoItemProps) {
  const [isChecked, setIsChecked] = useState<boolean>(item.getIsComplete);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const [modifiedTitle, setModifiedTitle] = useState<string>("");

  const formRef = useRef(null);
  useOnClickOutside(formRef, (): void => {
    setIsEditing(false)
  });

  function handleSave(): void {
    console.log("save")
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
              defaultChecked={false}
              onChange={(e) => {
                setIsChecked(e.target.checked);
              }}
            />
            <p
              className={`text-lg text-left ${isChecked ? 'line-through' : ''}`}
              onClick={(): void => setIsEditing(true)}
            >
              {item.getTitle}
            </p>
          </div>
          <hr className={"text-[var(--primary-bg-color)] brightness-90"}/>
        </>
      )}

      {isEditing && (
        <form
          ref={formRef}
          className={"flex flex-col gap-1 p-2"}
        >
          <textarea
            className={"w-full p-2 rounded-lg bg-[var(--primary-bg-color)] dark:bg-[var(--dark-primary-bg-color)]"}
            autoFocus={true}
            placeholder={"Add an item"}
            defaultValue={item.getTitle}
            onChange={(e): void => setModifiedTitle(e.target.value)}
          />
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
        </form>
      )}
    </>
  )
}