function mySlice(array, start, end) {
  let result = [];

  end = end || array.length;

  if (start < 0) start = array.length + start;
  if (end < 0) end = array.length + end;

  for (let i = start; i < end; i++) {
    result[result.length] = array[i];
  }

  return result;
}

module.exports = { mySlice };
