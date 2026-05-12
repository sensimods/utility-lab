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

/**
 * Safely retrieves an environment variable.
 * @param key - The name of the environment variable to retrieve.
 * @param fallback - The value to return if the environment variable is not set (default is an empty string).
 * @returns The value of the environment variable or the fallback.
 * @example
 * const apiUrl = getEnv("API_URL", "https://default.api.com");
 * console.log(apiUrl); // Will log the value of API_URL or "https://default.api.com" if not set
 */
export const getEnv = (key: string, fallback: string = ""): string => {
  if (typeof process === "undefined" || !process.env) return fallback;
  return process.env[key] ?? fallback;
};
