/**
 * Splits an array into groups of a specified size.
 * If the array can't be split evenly, the final chunk will contain the remaining elements.
 *
 * @param arr - The array to be chunked.
 * @param size - The size of each chunk (must be a positive integer).
 * @returns An array of chunks, where each chunk is an array of elements.
 * @example
 * chunk([1, 2, 3, 4, 5], 2) // [[1, 2], [3, 4], [5]]
 */
export const chunk = <T>(arr: T[], size: number): T[][] => {
  if (size <= 0) return [];
  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

/**
 * Returns a new array with all duplicate elements removed.
 * Works best with primitive values (strings, numbers, booleans).
 *
 * @param arr - The array to filter.
 * @returns A new array containing only unique values.
 * @example
 * unique([1, 2, 2, 3, 4, 4, 5]) // [1, 2, 3, 4, 5]
 */
export const unique = <T>(arr: T[]): T[] => [...new Set(arr)];

/**
 * Randomly shuffles an array using the Fisher-Yates algorithm.
 * Returns a new array and does not mutate the original.
 *
 * @param arr - The array to shuffle.
 * @returns A new, randomly ordered array.
 * @example
 * shuffle([1, 2, 3, 4, 5]) // e.g., [3, 5, 1, 4, 2]
 */
export const shuffle = <T>(arr: T[]): T[] => {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};

/**
 * Returns a random element from an array.
 *
 * @param arr - The array to sample from.
 * @returns A single random element from the array, or undefined if the array is empty.
 * @example
 * sample(['apple', 'banana', 'cherry']) // e.g., 'banana'
 */
export const sample = <T>(arr: T[]): T | undefined => {
  if (arr.length === 0) return undefined;
  return arr[Math.floor(Math.random() * arr.length)];
};

/**
 * Creates an array of numbers progressing from 'start' up to 'end'.
 *
 * @param start - The start of the range.
 * @param end - The end of the range (exclusive).
 * @param step - The value to increment by (default is 1).
 * @returns An array of numbers.
 * @example
 * range(0, 5) // [0, 1, 2, 3, 4]
 * range(10, 25, 5) // [10, 15, 20]
 */
export const range = (start: number, end: number, step = 1): number[] => {
  const result = [];
  for (let i = start; i < end; i += step) {
    result.push(i);
  }
  return result;
};
