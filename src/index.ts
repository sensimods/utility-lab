export {
  capitalize,
  pluralize,
  type PluralTypes,
  slugify,
  truncate,
} from "./string";
export { deepFreeze, type DeepReadonly, omit } from "./object";
export {
  randomInt,
  lerp,
  clamp,
  calculateDiscountPercentage,
  formatCurrency,
} from "./number";
export { debounce, throttle, once, sleep } from "./function";
export { chunk, unique, shuffle, sample, range, compact } from "./array";
export { isBrowser, isServer, isTouchDevice, getEnv } from "./environment";
