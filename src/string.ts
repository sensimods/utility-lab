export const capitalize = (str: string): string => {
  if (str.length === 0 || typeof str !== "string" || !str.trim()) return str;
  return str[0].toUpperCase() + str.slice(1);
};

//------------------------------------------------
export type PluralTypes = "s" | "es" | "ies";

export const pluralise = (
  amount: number,
  str: string,
  ending: PluralTypes = "s",
): string => {
  if (str.length === 0 || typeof str !== "string" || !str.trim()) return str;

  if (amount === 1) return str;

  return `${str}${ending}`;
};
