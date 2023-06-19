const { chunk } = require('../../methods/arrays/chunk');
describe('Chunk Function', () => {
  it('should split an array into chunks of the specified size', () => {
    expect(chunk([1, 2, 3, 4, 5, 6], 2)).toEqual([
      [1, 2],
      [3, 4],
      [5, 6],
    ]);
  });

  it('should return the array in a chunk if the array length is less than the size', () => {
    expect(chunk([1, 2, 3], 5)).toEqual([[1, 2, 3]]);
  });

  it('should handle cases where the array size does not divide evenly into chunks', () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
  });

  it('should return an array with an empty array if input array is empty', () => {
    expect(chunk([], 2)).toEqual([[]]);
  });
  it('should handle arrays with different types of data', () => {
    expect(chunk(['a', 'b', 1, 2, null, undefined], 2)).toEqual([
      ['a', 'b'],
      [1, 2],
      [null, undefined],
    ]);
    expect(chunk([true, false, 0, 1, {}, []], 3)).toEqual([
      [true, false, 0],
      [1, {}, []],
    ]);
  });

  it('should throw an error if the chunk size is negative', () => {
    expect(() => {
      chunk([1, 2, 3, 4, 5], -1);
    }).toThrow('Size cannot be negative');
  });
});
