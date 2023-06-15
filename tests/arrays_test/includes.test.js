const { MyIncludes } = require('../../methods/arrays/includes');

describe('MyIncludes Function', () => {
  it('should return true if array includes the value', () => {
    const result = MyIncludes([1, 2, 3], 1);
    expect(result).toEqual(true);
  });

  it('should return false if array does not include the value starting from the index', () => {
    const result = MyIncludes([1, 2, 3], 1, 2);
    expect(result).toEqual(false);
  });

  it('should return true if object values include the value', () => {
    const result = MyIncludes({ a: 1, b: 2 }, 1);
    expect(result).toEqual(true);
  });

  it('should return true if string includes the value', () => {
    const result = MyIncludes('abcd', 'bc');
    expect(result).toEqual(true);
  });

  it('should return true if array includes the value with negative index', () => {
    const result1 = MyIncludes([1, 2, 3], 3, -1);
    const result2 = MyIncludes([1, 2, 3], 2, -2);
    expect(result1).toEqual(true);
    expect(result2).toEqual(true);
  });

  it('should return false if array does not include the value with negative index', () => {
    const result = MyIncludes([1, 2, 3], 1, -2);
    expect(result).toEqual(false);
  });
});
