function isObject(item) {
  return item && typeof item === 'object' && !Array.isArray(item);
}

function merge(target, source) {
  let output = {};
  for (let key in target) {
    output[key] = target[key];
  }

  for (let key in source) {
    if (
      Array.isArray(source[key]) &&
      key in output &&
      Array.isArray(output[key])
    ) {
      output[key] = output[key].map((item, index) => {
        if (isObject(item) && isObject(source[key][index])) {
          return merge(item, source[key][index]);
        } else {
          return item;
        }
      });
    } else if (
      isObject(source[key]) &&
      key in output &&
      isObject(output[key])
    ) {
      output[key] = merge(output[key], source[key]);
    } else {
      output[key] = source[key];
    }
  }

  return output;
}

module.exports = { merge };
