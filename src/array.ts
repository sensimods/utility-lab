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
