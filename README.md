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

// TypeScript Error:
// Cannot assign to 'port' because it is a read-only property.

// config.server.port = 3000
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

## Why utility-lab?

- ✅ Zero dependencies
- ✅ Fully type-safe
- ✅ Modern TypeScript support
- ✅ Tree-shakeable
- ✅ Lightweight
- ✅ Immutable utilities included

---

## License

MIT © sensimods
