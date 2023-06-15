function pick(obj, keysToPick) {
  let result = {};

  for (let key in obj) {
    if (keysToPick.includes(key)) {
      result[key] = obj[key];
    }
  }

  return result;
}

module.exports = { pick };
