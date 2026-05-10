/**
 * Capitalizes the first letter of a given string.
 * @param str - The string to capitalize.
 * @returns The capitalized string.
 */

export const capitalize = (str: string): string => {
  if (!str || typeof str !== "string" || !str.trim()) return str;
  return str[0].toUpperCase() + str.slice(1);
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
 */

export const pluralize = (
  amount: number,
  str: string,
  ending: PluralTypes = "s",
): string => {
  if (!str || typeof str !== "string" || !str.trim()) return str;

  if (amount === 1) return str;

  // Handle the "ies" edge case for words ending in "y" (e.g., "story" -> "stories")
  if (ending === "ies" && str.endsWith("y")) {
    return str.slice(0, -1) + ending; // Slices off the last character
  }

  return `${str}${ending}`;
};
