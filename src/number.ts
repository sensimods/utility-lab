/**
 * Generates a random integer between the specified minimum and maximum values (inclusive).
 *
 * @param min - The minimum integer value (inclusive).
 * @param max - The maximum integer value (inclusive).
 * @returns A random integer between min and max.
 * @throws Will throw an error if the minimum value is greater than the maximum value.
 */

export const randomInt = (min: number, max: number): number => {
  // Sanitize floats into safe integer boundaries
  const safeMin = Math.ceil(min);
  const safeMax = Math.floor(max);

  // Check the safe values, not the raw inputs
  if (safeMin > safeMax) {
    throw new Error("Minimum value cannot be greater than maximum value.");
  }

  return Math.floor(Math.random() * (safeMax - safeMin + 1)) + safeMin;
};

/**
 * Performs linear interpolation between two numbers.
 * Calculates a value between 'start' and 'end' based on the 'amount' (percentage).
 *
 * @example
 * lerp(0, 100, 0.5) // 50 (50% of the way between 0 and 100)
 * lerp(20, 80, 0.25) // 35 (25% of the way between 20 and 80)
 *
 * @param start - The starting number.
 * @param end - The ending number.
 * @param amount - The interpolation multiplier (typically between 0.0 and 1.0).
 * @returns The interpolated value.
 */
export const lerp = (start: number, end: number, amount: number): number => {
  return start + (end - start) * amount;
};

/**
 * Calculates the discount percentage between an original price and a new price.
 * Safely handles division by zero and rounds to two decimal places to prevent long floats.
 *
 * @example
 * calculateDiscountPercentage(100, 80) // 20
 * calculateDiscountPercentage(29.99, 25) // 16.64
 *
 * @param originalPrice - The starting price (must be greater than 0).
 * @param newPrice - The discounted price.
 * @returns The discount percentage, rounded to a maximum of 2 decimal places.
 * @throws Will throw an error if the original price is 0 or less.
 */
export const calculateDiscountPercentage = (
  originalPrice: number,
  newPrice: number,
): number => {
  if (originalPrice <= 0) {
    throw new Error(
      "Original price must be greater than zero to calculate a discount.",
    );
  }

  const discount = ((originalPrice - newPrice) / originalPrice) * 100;

  // Uses Number() and toFixed(2) to cap decimals at 2 places, returning a strict number type.
  return Number(discount.toFixed(2));
};
