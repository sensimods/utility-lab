/**
 * Creates a debounced version of a function that delays its execution
 * until after `delay` milliseconds have elapsed since the last time it was called.
 * Useful for performance optimization on things like search inputs or window resizing.
 *
 * @example
 * const fetchResults = (query: string) => {
 *   // Imagine this function makes an API call to fetch search results
 *   console.log(`Fetching results for: ${query}`);
 * }
 * const handleSearch = debounce((query: string) => fetchResults(query), 500);
 *
 * @param func - The function to debounce.
 * @param delay - The number of milliseconds to wait.
 * @returns A new function that expects the exact same parameters as the original.
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  delay: number,
): ((...args: Parameters<T>) => void) => {
  // We use ReturnType<typeof setTimeout> instead of 'number' so this
  // works flawlessly in both Browser and Node.js environments.
  let timeoutId: ReturnType<typeof setTimeout> | undefined;

  return (...args: Parameters<T>): void => {
    // If the function is called again before the timer runs out, clear the old timer
    if (timeoutId !== undefined) {
      clearTimeout(timeoutId);
    }

    // Set a new timer
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

/**
 * Creates a throttled version of a function that only executes at most once
 * per every `limit` milliseconds.
 * @param func - The function to throttle.
 * @param limit - The number of milliseconds to wait before allowing the next execution.
 * @returns A new function that expects the exact same parameters as the original.
 * @example
 * const handleScroll = throttle(() => console.log("Scrolling..."), 100);
 * window.addEventListener("scroll", handleScroll);
 */
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number,
): ((...args: Parameters<T>) => void) => {
  let inThrottle = false;

  return (...args: Parameters<T>): void => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
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
