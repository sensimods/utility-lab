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

---

### Object Utilities

#### `deepFreeze(obj)`

Recursively freezes an object and all nested properties to ensure true immutability.

Features:

- Deep recursive freezing
- Strict `DeepReadonly<T>` typing
- Perfect for immutable state management

---

## Usage

### String Utilities

```ts
import { capitalize, pluralize } from "@sensimods/utility-lab";

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
