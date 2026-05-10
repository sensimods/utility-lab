export type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
};

export const deepFreeze = <T extends object>(obj: T): DeepReadonly<T> => {
  Object.keys(obj).forEach(prop => {
    const value = (obj as any)[prop];
    if (typeof value === "object" && value !== null) {
      deepFreeze(value);
    }
  });
  return Object.freeze(obj) as DeepReadonly<T>;
};
