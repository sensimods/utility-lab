<!-- # @sensimods/utility-lab 🧪

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

#### `capitalize(str)`

Safely capitalizes the first letter of any string.

- Handles empty strings
- Handles edge cases safely
- Fully type-safe

#### `pluralize(amount, str, ending?)`

Smart pluralization based on numeric amounts.

Supports:

- Standard `"s"` endings
- `"es"` endings
- Smart `"ies"` conversion (`story` → `stories`)

Examples:

- `apple` → `apples`
- `bus` → `buses`
- `story` → `stories`

#### `slugify(str)`

Safely converts a string into a URL-friendly slug.

- Converts spaces and symbols into hyphens
- Removes unsupported URL characters
- Handles empty strings safely

---

### Object Utilities

#### `deepFreeze(obj)`

Recursively freezes an object and all nested properties to ensure true immutability.

Features:

- Deep recursive freezing
- Strict `DeepReadonly<T>` typing
- Perfect for immutable state management

---

### Number Utilities

#### `randomInt(min, max)`

Generates a random integer between the specified minimum and maximum values (inclusive).

#### `lerp(start, end, amount)`

Performs linear interpolation to calculate a value between a start and end point based on a percentage (`amount`). Perfect for animations and UI calculations.

#### `calculateDiscountPercentage(originalPrice, newPrice)`

Calculates the discount percentage between an original price and a new price.
Safely handles division by zero and rounds to two decimal places to prevent long floats.

---

### Function Utilities

#### `debounce(func, delay)`

Creates a debounced version of a function that delays its execution until after the specified delay. Features advanced TypeScript inference, ensuring the returned function strictly requires the exact same parameters as the original. Safe for both Browser and Node.js environments.

## Usage

### String Utilities

```ts
import { capitalize, pluralize, slugify } from "@sensimods/utility-lab";

// Capitalize
capitalize("hello world"); // "Hello world"
capitalize(""); // ""

// Default 's' ending
pluralize(1, "apple"); // "apple"
pluralize(3, "apple"); // "apples"

// Custom 'es' ending
pluralize(2, "bus", "es"); // "buses"

// Smart 'ies' ending
pluralize(5, "story", "ies"); // "stories"

// Slugify
slugify("Hello World! Weclome to 2026!"); // "hello-world-welcome-to-2026"
```

---

### Object Utilities

```ts
import { deepFreeze } from "@sensimods/utility-lab";

const config = deepFreeze({
  server: { port: 8080 },
  active: true,
});

// config.server.port = 3000

// TypeScript Error:
// Cannot assign to 'port' because it is a read-only property.
```

---

### Number Utilities

```ts
import {
  randomInt,
  lerp,
  calculateDiscountPercentage,
} from "@sensimods/utility-lab";

randomInt(1, 100); // Random number between 1-100

lerp(0, 100, 0.5); // 50 (50% of the way between 0 and 100)
lerp(20, 80, 0.25); // 35 (25% of the way between 20 and 80)

calculateDiscountPercentage(100, 50); // 50
calculateDiscountPercentage(29.99, 25); // 16.64
```

---

### Function Utilities

```typescript
import { debounce } from "@sensimods/utility-lab";

// 1. Your original function (e.g., hitting a database)
const searchDatabase = (query: string) => {
  console.log(`Searching for: ${query}`);
};

// 2. Create the debounced version (waits 500ms)
const debouncedSearch = debounce(searchDatabase, 500);

// 3. Simulate rapid user typing
debouncedSearch("a");
debouncedSearch("ap");
debouncedSearch("app");
debouncedSearch("appl");
debouncedSearch("apple");

// Output: "Searching for: apple"
// (The function only executes ONCE, 500ms after the final keystroke!)
```

---

## Why utility-lab?

- ✅ Zero dependencies
- ✅ Fully type-safe
- ✅ Modern TypeScript support
- ✅ Tree-shakeable
- ✅ Lightweight
- ✅ Immutable utilities included

---

## License

MIT © sensimods -->

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

### Number Utilities

- `randomInt(min, max)`
- `lerp(start, end, amount)`
- `calculateDiscountPercentage(originalPrice, newPrice)`
- `formatCurrency(amount, currency, locale)`

### Function Utilities

- `debounce(func, delay)`
- `throttle(func, limit)`
- `once(func)`

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
  randomInt,
  lerp,
  formatCurrency
  debounce,
  throttle,
  once,
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
