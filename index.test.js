const isEmptyValue = require('./index');

describe('isEmptyValue', () => {
  // Null/undefined
  test('null', () => {
    expect(isEmptyValue(null)).toBe(true);
  });
  test('undefined', () => {
    expect(isEmptyValue(undefined)).toBe(true);
  });

  // Strings
  test('empty string', () => {
    expect(isEmptyValue('')).toBe(true);
  });
  test('whitespace string', () => {
    expect(isEmptyValue('   ')).toBe(true);
  });
  test('non-empty string', () => {
    expect(isEmptyValue('hello')).toBe(false);
  });

  // Arrays
  test('empty array', () => {
    expect(isEmptyValue([])).toBe(true);
  });
  test('non-empty array', () => {
    expect(isEmptyValue([1, 2])).toBe(false);
  });

  // Objects
  test('empty object', () => {
    expect(isEmptyValue({})).toBe(true);
  });
  test('non-empty object', () => {
    expect(isEmptyValue({ a: 1 })).toBe(false);
  });
  test('object with prototype', () => {
    expect(isEmptyValue(Object.create({}))).toBe(true);
  });

  // Map/Set
  test('empty Map', () => {
    expect(isEmptyValue(new Map())).toBe(true);
  });
  test('non-empty Map', () => {
    expect(isEmptyValue(new Map([['a', 1]]))).toBe(false);
  });
  test('empty Set', () => {
    expect(isEmptyValue(new Set())).toBe(true);
  });
  test('non-empty Set', () => {
    expect(isEmptyValue(new Set([1]))).toBe(false);
  });

  // Numbers
  test('NaN', () => {
    expect(isEmptyValue(NaN)).toBe(true);
  });
  test('zero', () => {
    expect(isEmptyValue(0)).toBe(false);
  });
  test('positive number', () => {
    expect(isEmptyValue(42)).toBe(false);
  });
  test('negative number', () => {
    expect(isEmptyValue(-1)).toBe(false);
  });

  // Other types
  test('Date object', () => {
    expect(isEmptyValue(new Date())).toBe(false);
  });
  test('RegExp object', () => {
    expect(isEmptyValue(/abc/)).toBe(false);
  });
  test('function', () => {
    expect(isEmptyValue(function () {})).toBe(false);
  });
  test('invalid Date object (NaN time)', () => {
    expect(isEmptyValue(new Date('invalid date'))).toBe(true);
  });
});
