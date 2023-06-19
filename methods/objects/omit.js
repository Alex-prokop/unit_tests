function omit(obj, keysToOmit) {
  let result = {};

  for (let key in obj) {
    if (!keysToOmit.includes(key)) {
      result[key] = obj[key];
    }
  }

  return result;
}
module.exports = { omit };
