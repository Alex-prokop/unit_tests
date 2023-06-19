function MyMap(collection, iteratee) {
  let result = [];

  if (typeof iteratee === 'string') {
    for (let i = 0; i < collection.length; i++) {
      result.push(collection[i][iteratee]);
    }
  } else {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        result.push(iteratee(collection[i], i, collection));
      }
    } else if (typeof collection === 'object') {
      const keys = Object.keys(collection);
      for (let i = 0; i < keys.length; i++) {
        result.push(iteratee(collection[keys[i]], keys[i], collection));
      }
    }
  }

  return result;
}
module.exports = { MyMap };
