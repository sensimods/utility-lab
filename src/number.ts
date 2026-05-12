/**
 * Generates a random integer between the specified minimum and maximum values (inclusive).
 *
 * @param min - The minimum integer value (inclusive).
 * @param max - The maximum integer value (inclusive).
 * @returns A random integer between min and max.
 * @throws Will throw an error if the minimum value is greater than the maximum value.
 * @example
 * randomInt(1, 10) // could return any integer from 1 to 10
 * randomInt(5, 5) // will always return 5
 * randomInt(10, 1) // throws an error
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

/**
 * Formats a number as a localized currency string.
 * Utilizes the built-in Intl.NumberFormat API for robust internationalization support.
 * Falls back to a default format if the provided locale or currency code is invalid.
 * @param amount - The numeric amount to format as currency.
 * @param currency - The ISO 4217 currency code (e.g., "USD", "EUR"). Defaults to "USD".
 * @param locale - The BCP 47 language tag for locale formatting (e.g., "en-US", "de-DE"). Defaults to "en-US".
 * @returns A string representing the formatted currency amount.
 * @throws Will throw a TypeError if the amount is not a finite number.
 * @example
 * formatCurrency(1250.5)
 * // "$1,250.50"
 *
 * @example
 * formatCurrency(100, "EUR", "de-DE")
 * // "100,00 €"
 */
export const formatCurrency = (
  amount: number,
  currency = "USD",
  locale = "en-US",
): string => {
  if (!Number.isFinite(amount)) {
    throw new TypeError("Amount must be a finite number");
  }

  try {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
    }).format(amount);
  } catch {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  }
};
