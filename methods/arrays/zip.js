function zip(...arrays) {
  const maxLength = Math.max(...arrays.map((arr) => arr.length));
  let zipped = [];

  for (let i = 0; i < maxLength; i++) {
    zipped[i] = [];
    for (let j = 0; j < arrays.length; j++) {
      zipped[i].push(arrays[j][i]);
    }
  }

  return zipped;
}

module.exports = { zip };
