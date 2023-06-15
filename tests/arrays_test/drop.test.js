const { drop } = require('../../methods/arrays/drop');

describe('Drop Function', () => {
  it('should remove the first element of the array if n is not provided', () => {
    expect(drop([1, 2, 3])).toEqual([2, 3]);
  });

  it('should remove the first n elements of the array', () => {
    expect(drop([1, 2, 3], 2)).toEqual([3]);
  });

  it('should return an empty array if n is greater than the length of the array', () => {
    expect(drop([1, 2, 3], 5)).toEqual([]);
  });

  it('should not remove elements if n is 0', () => {
    expect(drop([1, 2, 3], 0)).toEqual([1, 2, 3]);
  });

  it('should correctly handle an empty array', () => {
    expect(drop([], 3)).toEqual([]);
  });

  it('should correctly handle a negative value for n', () => {
    expect(drop([1, 2, 3], -2)).toEqual([1, 2, 3]);
  });
});
