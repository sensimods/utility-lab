/**
 * A utility type that recursively makes all properties of an object and its nested objects readonly.
 * This ensures strict compile-time immutability.
 */
export type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
};

/**
 * Recursively applies Object.freeze to an object and all of its nested properties.
 *
 * @param obj - The object to freeze.
 * @returns The original object, now strictly frozen and typed as DeepReadonly.
 */
export const deepFreeze = <T extends object>(obj: T): DeepReadonly<T> => {
  Object.keys(obj).forEach(prop => {
    const value = (obj as any)[prop];
    if (typeof value === "object" && value !== null) {
      deepFreeze(value);
    }
  });
  return Object.freeze(obj) as DeepReadonly<T>;
};
