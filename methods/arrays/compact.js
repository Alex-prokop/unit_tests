function compact(array) {
  let result = [];
  let counter = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      result[counter] = array[i];
      counter++;
    }
  }

  return result;
}

module.exports = { compact };
