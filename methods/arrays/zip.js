function zip(...arrays) {
  let maxLength = 0;
  for (let i = 0; i < arrays.length; i++) {
    if (arrays[i].length > maxLength) {
      maxLength = arrays[i].length;
    }
  }

  let zipped = new Array(maxLength);

  for (let i = 0; i < maxLength; i++) {
    zipped[i] = new Array(arrays.length);
    for (let j = 0; j < arrays.length; j++) {
      zipped[i][j] = arrays[j][i];
    }
  }

  return zipped;
}

module.exports = { zip };
