const isEmptyValue = require('./index');

function test(name, value, expected) {
  const result = isEmptyValue(value);
  if (result !== expected) {
    console.error(`❌ ${name}: expected ${expected}, got ${result}`);
    process.exitCode = 1;
  } else {
    console.log(`✅ ${name}`);
  }
}

// Null/undefined
test('null', null, true);
test('undefined', undefined, true);

// Strings
test('empty string', '', true);
test('whitespace string', '   ', true);
test('non-empty string', 'hello', false);

// Arrays
test('empty array', [], true);
test('non-empty array', [1, 2], false);

// Objects
test('empty object', {}, true);
test('non-empty object', { a: 1 }, false);
test('object with prototype', Object.create({}), true);

// Map/Set
test('empty Map', new Map(), true);
test('non-empty Map', new Map([['a', 1]]), false);
test('empty Set', new Set(), true);
test('non-empty Set', new Set([1]), false);

// Numbers
test('NaN', NaN, true);
test('zero', 0, false);
test('positive number', 42, false);
test('negative number', -1, false);

// Other types
test('Date object', new Date(), false);
test('RegExp object', /abc/, false);
test('function', function () {}, false);
