function MyIncludes(collection, value, fromIndex = 0) {
  if (typeof collection === 'string') {
    return collection.indexOf(value, fromIndex) !== -1;
  }

  if (Array.isArray(collection)) {
    fromIndex =
      fromIndex < 0 ? Math.max(0, collection.length + fromIndex) : fromIndex;
    for (let i = fromIndex; i < collection.length; i++) {
      if (collection[i] === value) {
        return true;
      }
    }
  } else if (typeof collection === 'object') {
    const values = Object.values(collection);
    for (let i = 0; i < values.length; i++) {
      if (values[i] === value) {
        return true;
      }
    }
  }
  return false;
}
module.exports = { MyIncludes };
