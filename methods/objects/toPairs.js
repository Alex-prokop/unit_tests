function toPairs(obj) {
  let result = [];

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result.push([key, obj[key]]);
    }
  }

  return result;
}

module.exports = { pickBy };
