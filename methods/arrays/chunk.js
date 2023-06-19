const { mySlice } = require('./servicemethods');

function chunk(array, size) {
  if (size < 0) {
    throw new Error('Size cannot be negative');
  }

  if (array.length <= size) {
    return [array];
  }
  return [
    mySlice(array, 0, size),
    ...chunk(mySlice(array, size, array.length), size),
  ];
}

module.exports = { chunk };
