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
 * @example
 * const config = deepFreeze({
 *   api: {
 *     endpoint: "[https://api.v1.com](https://api.v1.com)",
 *     retries: 3
 *   },
 *   features: ["auth", "payments"]
 * });
 *
 * // Modification attempts will fail:
 * // config.api.endpoint = "[https://hack.com](https://hack.com)";
 * // ^ TypeError: Cannot assign to read only property
 *
 * // Nested arrays are also made readonly:
 * // config.features.push("billing");
 * // ^ Property 'push' does not exist on type 'readonly string[]'
 *
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

/**
 * Creates a new object with the specified keys removed.
 * @param obj - The original object to omit keys from.
 * @param keys - An array of keys to omit from the original object.
 * @returns A new object with the specified keys omitted.
 * @example
 * const user = { id: 1, name: 'John', password: '123' };
 * const publicUser = omit(user, ['password']); // { id: 1, name: 'John' }
 */
export const omit = <T extends object, K extends keyof T>(
  obj: T,
  keys: K[],
): Omit<T, K> => {
  const result = { ...obj };
  keys.forEach(key => {
    delete result[key];
  });
  return result as Omit<T, K>;
};
