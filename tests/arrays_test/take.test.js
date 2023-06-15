const { take } = require('../../methods/arrays/take');

describe('Take Function', () => {
  const array = [1, 2, 3, 4, 5];

  it('should return first n elements when n is provided', () => {
    const result = take(array, 3);
    expect(result).toEqual([1, 2, 3]);
  });

  it('should return the first element when n is not provided', () => {
    const result = take(array);
    expect(result).toEqual([1]);
  });

  it('should return an empty array when n is less than 1', () => {
    const result = take(array, -1);
    expect(result).toEqual([]);
  });

  it('should return all elements when n is larger than array length', () => {
    const result = take(array, 10);
    expect(result).toEqual(array);
  });

  it('should return an empty array when called with an empty array', () => {
    const result = take([], 3);
    expect(result).toEqual([]);
  });
});
