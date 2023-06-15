function dropWhile(arr, predicate) {
  var dropIndex = arr.length;
  for (var i = 0; i < arr.length; i++) {
    var condition;
    switch (typeof predicate) {
      case 'function':
        condition = predicate(arr[i], i, arr);
        break;
      case 'object':
        if (Array.isArray(predicate)) {
          condition = arr[i][predicate[0]] === predicate[1];
        } else {
          condition = Object.keys(predicate).every(
            (key) => arr[i][key] === predicate[key]
          );
        }
        break;
      case 'string':
        condition = arr[i][predicate];
        break;
    }
    if (!condition) {
      dropIndex = i;
      break;
    }
  }
  return arr.slice(dropIndex);
}

module.exports = { dropWhile };
