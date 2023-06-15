function drop(arr, n = 1) {
  const result = [];
  if (n < 0) n = 0;
  return arr.slice(n);

  for (let i = n; i < arr.length; i++) {
    result.push(arr[i]);
  }
  return result;
}

module.exports = { drop };
