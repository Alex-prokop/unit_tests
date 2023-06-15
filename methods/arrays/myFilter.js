function myFilter(arr, predicate) {
  let result = [];
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
      result.push(arr[i]);
    }
  }
  return result;
}

module.exports = { myFilter };
