function take(array, n = 1) {
  const result = new Array(n >= 0 ? Math.min(n, array.length) : 0);
  for (let i = 0; i < result.length; i++) {
    result[i] = array[i];
  }
  return result;
}

module.exports = { take };
