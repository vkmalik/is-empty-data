function isEmptyValue(value) {
  if (value === null || value === undefined) return true;

  if (typeof value === 'string' && value.trim() === '') return true;

  if (Array.isArray(value) && value.length === 0) return true;

  if (value instanceof Map || value instanceof Set) {
    return value.size === 0;
  }

  if (
    typeof value === 'object' &&
    value.constructor === Object &&
    Object.keys(value).length === 0
  ) {
    return true;
  }

  if (typeof value === 'number' && isNaN(value)) return true;

  if (value instanceof Date && isNaN(value.getTime())) return true;

  return false;
}

module.exports = isEmptyValue;
module.exports.default = isEmptyValue;
