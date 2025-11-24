# is-empty-data

Tiny utility to check if a value is empty (`null`, `undefined`, `''`, `[]`, `{}`, `NaN`, empty `Map`/`Set`).

## Install

```bash
npm install is-empty-data
```

## Usage

```js
const isEmptyValue = require('./index');

isEmptyValue(null); // true
isEmptyValue(undefined); // true
isEmptyValue(''); // true
isEmptyValue('   '); // true
isEmptyValue([]); // true
isEmptyValue({}); // true
isEmptyValue(NaN); // true
isEmptyValue(new Map()); // true
isEmptyValue(new Set()); // true

isEmptyValue(42); // false
isEmptyValue('hello'); // false
isEmptyValue([1, 2]); // false
isEmptyValue({ a: 1 }); // false
isEmptyValue(new Map([['a', 1]])); // false
isEmptyValue(new Set([1])); // false
```

## API

### isEmptyValue(value)

Returns `true` if the value is considered empty:

- `null` or `undefined`
- Empty string (after trim)
- Empty array
- Empty object (plain object, no own properties)
- `NaN`
- Empty `Map` or `Set`

Returns `false` otherwise.

## License

MIT
