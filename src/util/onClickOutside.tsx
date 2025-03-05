import {RefObject, useEffect} from "react";

/**
 * Invoke a method when `mousedown` event is called outside the target element.
 * @param ref Ref object.
 * @param callback The function that is invoked when mousedown event is called.
 */
export function useOnClickOutside(ref: RefObject<Element| null>, callback: () => void): void {
  useEffect(() => {
    function handleClickOutside(event: Event): void {
      if (ref == null) return;

      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}