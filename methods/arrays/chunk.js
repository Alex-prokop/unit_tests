function chunk(array, size) {
  if (array.length <= size) {
    return [array];
  }
  return [array.slice(0, size), ...chunk(array.slice(size), size)];
}
module.exports = { chunk };
