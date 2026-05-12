# @sensimods/utility-lab 🧪

A lightweight, fully type-safe collection of modern JavaScript/TypeScript utility functions. Built with zero dependencies and strict compile-time safety in mind.

---

## Installation

Install via your preferred package manager:

```bash
npm install @sensimods/utility-lab
```

Or with Yarn:

```bash
yarn add @sensimods/utility-lab
```

Or with pnpm:

```bash
pnpm add @sensimods/utility-lab
```

---

## Features

### String Utilities

- `capitalize(str)`
- `pluralize(amount, str, ending?)`
- `slugify(str)`

### Object Utilities

- `deepFreeze(obj)`
- `omit(obj, keys)`

### Array Utilities

- `chunk(arr, size)`
- `unique(arr)`
- `shuffle(arr)`
- `sample(arr)`
- `range(start, end, step?)`

### Number Utilities

- `randomInt(min, max)`
- `lerp(start, end, amount)`
- `calculateDiscountPercentage(originalPrice, newPrice)`
- `formatCurrency(amount, currency, locale)`

### Function Utilities

- `debounce(func, delay)`
- `throttle(func, limit)`
- `once(func)`
- `sleep(ms)`

### Environment Utilities

- `isBrowser()`
- `isServer()`
- `isTouchDevice()`
- `getEnv(key, fallback)`

---

## Quick Example

```ts
import {
  capitalize,
  pluralize,
  slugify,
  deepFreeze,
  omit,
  chunk,
  unique,
  shuffle,
  sample,
  range,
  randomInt,
  lerp,
  formatCurrency
  debounce,
  throttle,
  once,
  sleep,
  isBrowser,
  isServer,
  isTouchDevice,
  getEnv
} from "@sensimods/utility-lab";

// String utilities
capitalize("hello world"); // "Hello world"
pluralize(5, "story", "ies"); // "stories"
slugify("Hello World! Welcome to 2026!");
// "hello-world-welcome-to-2026"

// Object utilities
const config = deepFreeze({
  api: {
    port: 8080,
  },
});

const user = { id: 1, name: "John", password: "123" };
const publicUser = omit(user, ["password"]); // { id: 1, name: 'John' }

// Array utilities
chunk([1, 2, 3, 4, 5], 2); // [[1, 2], [3, 4], [5]]
unique([1, 2, 2, 3, 4, 4, 5]) // [1, 2, 3, 4, 5]
shuffle([1, 2, 3, 4, 5]) // e.g., [3, 5, 1, 4, 2]
sample(['apple', 'banana', 'cherry']) // e.g., 'banana'
range(0, 5) // [0, 1, 2, 3, 4]
range(10, 25, 5) // [10, 15, 20]

// Number utilities
randomInt(1, 100);
lerp(0, 100, 0.5); // 50
formatCurrency(100, "EUR", "de-DE") // "100,00 €"

// Function utilities
const fetchResults = (query: string) => {
 // Imagine this function makes an API call to fetch search results
  console.log(`Fetching results for: ${query}`);
};
const handleSearch = debounce((query: string) => fetchResults(query), 500);

const handleScroll = throttle(() => console.log("Scrolling..."), 100);
window.addEventListener("scroll", handleScroll);

const initialize = once(() => {
  console.log("Setup complete!");
  return { status: "ready" };
});

initialize(); // Logs "Setup complete!"
initialize(); // Does nothing, just returns { status: "ready" }

await sleep(2000); // Wait for 2 seconds


// Environment utilities
if (isBrowser()) {
  console.log("This code is running in a browser!");
};

if (isServer()) {
  console.log("This code is running on the server!");
};

if (isTouchDevice()) {
  console.log("This device supports touch interactions!");
};

 const apiUrl = getEnv("API_URL", "https://default.api.com");
 console.log(apiUrl); // Will log the value of API_URL or "https://default.api.com" if not set
```

---

## Documentation

Full documentation, examples, and API references are available here:

👉 **[View Documentation](https://sensimods.github.io/utility-lab/)**

---

## Why utility-lab?

- ✅ Fully type-safe
- ✅ Zero dependencies
- ✅ Lightweight & fast
- ✅ Tree-shakeable
- ✅ Modern TypeScript support
- ✅ Browser & Node.js compatible

---

## License

MIT © sensimods
