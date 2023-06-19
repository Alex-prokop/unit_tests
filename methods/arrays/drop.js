const { mySlice } = require('./servicemethods');

function drop(arr, n = 1) {
  if (n < 0) n = 0;
  return mySlice(arr, n);
}

module.exports = { drop };
