/**
 * Creates a debounced version of a function that delays its execution
 * until after `delay` milliseconds have elapsed since the last time it was called.
 * Useful for performance optimization on things like search inputs or window resizing.
 * The returned function includes a `.cancel()` method to clear any pending timers.
 * This is essential for cleaning up in component-based frameworks (like React)
 * to prevent updates on unmounted components.
 *
 * @param func - The function to debounce.
 * @param delay - The number of milliseconds to wait.
 * @returns A debounced function with a `.cancel()` method.
 *
 * @example
 * const handleSearch = debounce((query: string) => console.log(query), 500);
 *
 * // Later, if the component unmounts:
 * handleSearch.cancel();
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  delay: number,
): ((...args: Parameters<T>) => void) & { cancel: () => void } => {
  let timeoutId: ReturnType<typeof setTimeout> | undefined;
  const wait = Math.max(0, delay);

  const debounced = (...args: Parameters<T>): void => {
    if (timeoutId !== undefined) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      func(...args);
    }, wait);
  };

  debounced.cancel = () => {
    if (timeoutId !== undefined) {
      clearTimeout(timeoutId);
      timeoutId = undefined;
    }
  };

  return debounced;
};

/**
 * Creates a throttled version of a function that only executes at most once
 * per every `limit` milliseconds.
 *
 * The returned function includes a `.cancel()` method to reset the throttle state
 * and clear any active timers.
 *
 * @param func - The function to throttle.
 * @param limit - The number of milliseconds to wait between executions.
 * @returns A throttled function with a `.cancel()` method.
 *
 * @example
 * const handleScroll = throttle(() => console.log("Scrolling..."), 100);
 *
 * // To stop throttling and clear timers:
 * handleScroll.cancel();
 */
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number,
): ((...args: Parameters<T>) => void) & { cancel: () => void } => {
  let inThrottle = false;
  let timeoutId: ReturnType<typeof setTimeout> | undefined;
  const wait = Math.max(0, limit);

  const throttled = (...args: Parameters<T>): void => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      timeoutId = setTimeout(() => (inThrottle = false), wait);
    }
  };

  throttled.cancel = () => {
    if (timeoutId !== undefined) {
      clearTimeout(timeoutId);
      timeoutId = undefined;
    }
    inThrottle = false;
  };

  return throttled;
};

/**
 * Ensures a function can only be called once. Subsequent calls will
 * return the result of the first execution.
 * @param func - The function to execute only once.
 * @returns A new function that expects the exact same parameters as the original.
 * @example
 * const initialize = once(() => {
 *   console.log("Setup complete!");
 *   return { status: "ready" };
 * });
 *
 * initialize(); // Logs "Setup complete!"
 * initialize(); // Does nothing, just returns { status: "ready" }
 */
export const once = <T extends (...args: any[]) => any>(
  func: T,
): ((...args: Parameters<T>) => ReturnType<T>) => {
  let ran = false;
  let result: ReturnType<T>;

  return (...args: Parameters<T>): ReturnType<T> => {
    if (!ran) {
      result = func(...args);
      ran = true;
    }
    return result;
  };
};

/**
 * Pauses the execution of an async function for a specified number of milliseconds.
 *
 * @param ms - Milliseconds to sleep.
 * @returns A promise that resolves after the delay.
 * @example
 * await sleep(2000); // Wait for 2 seconds
 */
export const sleep = (ms: number): Promise<void> =>
  new Promise(resolve => setTimeout(resolve, ms));
