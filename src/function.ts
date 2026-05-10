/**
 * Creates a debounced version of a function that delays its execution
 * until after `delay` milliseconds have elapsed since the last time it was called.
 * Useful for performance optimization on things like search inputs or window resizing.
 *
 * @example
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
