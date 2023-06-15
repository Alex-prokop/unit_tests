function MyFind(arr, predicate) {
  for (let i = 0; i < arr.length; i++) {
    let condition;
    switch (typeof predicate) {
      case 'function':
        condition = predicate(arr[i], i, arr);
        break;
      case 'object':
        if (Array.isArray(predicate)) {
          condition = arr[i][predicate[0]] === predicate[1];
        } else {
          const keys = Object.keys(predicate);
          condition = keys.every((key) => arr[i][key] === predicate[key]);
        }
        break;
      case 'string':
        condition = arr[i][predicate];
        break;
    }
    if (condition) {
      return arr[i];
    }
  }
  return undefined;
}

module.exports = { MyFind };
