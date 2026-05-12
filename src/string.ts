/**
 * Capitalizes the first letter of a given string.
 * @param str - The string to capitalize.
 * @param locale - Optional locale identifier for locale-specific case mapping (default is "en-US").
 * @returns The capitalized string.
 * @example
 * capitalize("hello world") // "Hello world"
 * capitalize("typescript") // "Typescript"
 */

export const capitalize = (str: string, locale = "en-US"): string => {
  if (!str || typeof str !== "string" || !str.trim()) return str;
  return str.charAt(0).toLocaleUpperCase(locale) + str.slice(1);
};

/**
 * The allowed suffixes for standard English pluralization.
 */
export type PluralTypes = "s" | "es" | "ies";

/**
 * Pluralizes a given string based on the provided amount.
 * Automatically handles dropping the trailing 'y' for 'ies' endings.
 *
 * @param amount - The number that determines whether to pluralize the string.
 * @param str - The string to pluralize.
 * @param ending - The type of pluralization to apply (default is "s").
 * @returns The pluralized string if amount is not 1, otherwise returns the original string.
 * @example
 * pluralize(1, "cat") // "cat"
 * pluralize(2, "cat") // "cats"
 */

export const pluralize = (
  amount: number,
  str: string,
  ending: PluralTypes = "s",
): string => {
  if (!str || typeof str !== "string" || !str.trim()) return str;

  // In English, 1 is singular. 0 and negatives are typically plural.
  if (Math.abs(amount) === 1) return str;

  if (ending === "ies" && str.toLowerCase().endsWith("y")) {
    return str.slice(0, -1) + ending;
  }

  return `${str}${ending}`;
};

/**
 * Converts a string into a URL-friendly slug.
 * Strips all special characters, replaces spaces with hyphens, and converts everything to lowercase.
 *
 * @example
 * slugify("Hello World! Welcome to 2026") // "hello-world-welcome-to-2026"
 *
 * @param str - The original string to transform.
 * @returns The formatted, URL-safe slug string.
 */
export const slugify = (str: string): string => {
  return str
    .normalize("NFD") // Decomposes combined graphemes (e.g., 'é' -> 'e' + '´')
    .replace(/[\u0300-\u036f]/g, "") // Removes the accent marks
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-") // Replaces non-alphanumeric characters with hyphens
    .replace(/^-+|-+$/g, ""); // Removes leading/trailing hyphens
};

/**
 * Truncates a string to a specified length and adds an ellipsis.
 * A must-have for UI-focused utility libraries.
 * @param str - The string to truncate.
 * @param length - The maximum length of the truncated string (excluding the suffix).
 * @param suffix - The string to append to the truncated string (default is "...").
 * @return The truncated string with the suffix if truncation occurred, otherwise returns the original string.
 * @example
 * truncate("This is a long string that needs to be shortened.", 20)
 * // "This is a long str..."
 */
export const truncate = (
  str: string,
  length: number,
  suffix = "...",
): string => {
  const safeLength = Math.max(0, length); // Defends against negative inputs
  if (str.length <= safeLength) return str;
  return str.slice(0, safeLength).trim() + suffix;
};
