import { useEffect, useRef } from 'react';

/**
 * Variant of the `setInterval` function with `useEffect`.
 * @param callback The function that is invoked on each interval tick.
 * @param delay The interval (delay) between each interval tick.
 */
export function useInterval(callback: () => void, delay: number) {
  const savedCallback = useRef(callback);

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id: number = setInterval(tick, delay);
      return (): void => clearInterval(id);
    }
  }, [delay]);
}