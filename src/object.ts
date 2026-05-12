/**
 * A utility type that recursively makes all properties of an object and its nested objects readonly.
 */
export type DeepReadonly<T> = T extends (infer R)[]
  ? ReadonlyArray<DeepReadonly<R>>
  : T extends Function
    ? T
    : T extends object
      ? { readonly [K in keyof T]: DeepReadonly<T[K]> }
      : T;

/**
 * Recursively applies Object.freeze to an object and all of its nested properties.
 * Includes protection against circular references.
 *
 * @param obj - The object to freeze.
 * @param seen - (Internal) WeakSet to track visited objects for circular references.
 * @returns The original object, now strictly frozen and typed as DeepReadonly.
 */
export const deepFreeze = <T extends object>(
  obj: T,
  seen = new WeakSet<object>(),
): DeepReadonly<T> => {
  // Prevent infinite loops from circular references
  if (seen.has(obj) || Object.isFrozen(obj)) {
    return obj as DeepReadonly<T>;
  }

  seen.add(obj);

  // Use getOwnPropertyNames to catch non-enumerable properties
  Object.getOwnPropertyNames(obj).forEach(prop => {
    const value = (obj as any)[prop];

    if (
      value !== null &&
      (typeof value === "object" || typeof value === "function")
    ) {
      deepFreeze(value, seen);
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

  for (const key of keys) {
    if (Object.prototype.hasOwnProperty.call(result, key)) {
      delete result[key];
    }
  }

  return result as Omit<T, K>;
};
