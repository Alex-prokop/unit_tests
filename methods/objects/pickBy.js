function pickBy(obj, predicate) {
  let result = {};

  for (let key in obj) {
    if (predicate(obj[key], key)) {
      result[key] = obj[key];
    }
  }

  return result;
}

module.exports = { pickBy };
