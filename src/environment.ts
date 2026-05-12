/**
 * Checks if the code is currently running in a browser environment.
 * Useful for Next.js SSR/Client checks.
 * @returns `true` if running in a browser, `false` otherwise.
 * @example
 * if (isBrowser()) {
 *   console.log("This code is running in a browser!");
 * }
 */
export const isBrowser = (): boolean => {
  return (
    typeof window !== "undefined" && typeof window.document !== "undefined"
  );
};

/**
 * Checks if the code is currently running on the server.
 * Useful for guarding Node-specific logic in Next.js.
 * @returns `true` if running on the server, `false` otherwise.
 * @example
 * if (isServer()) {
 *   console.log("This code is running on the server!");
 * }
 */
export const isServer = (): boolean => !isBrowser();

/**
 * Checks if the current device supports touch interactions.
 * @returns `true` if touch is supported.
 * @example
 * if (isTouchDevice()) {
 *   console.log("This device supports touch interactions!");
 * }
 */
export const isTouchDevice = (): boolean => {
  return (
    isBrowser() && ("ontouchstart" in window || navigator.maxTouchPoints > 0)
  );
};
