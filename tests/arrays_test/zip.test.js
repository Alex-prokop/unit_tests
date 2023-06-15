const { zip } = require('../../methods/arrays/zip');

describe('Zip Function', () => {
  it('should zip arrays into one', () => {
    const result = zip(['a', 'b'], [1, 2], [true, false]);
    expect(result).toEqual([
      ['a', 1, true],
      ['b', 2, false],
    ]);
  });

  it('should handle different length arrays', () => {
    const result = zip(['a', 'b', 'c'], [1, 2], [true, false, true]);
    expect(result).toEqual([
      ['a', 1, true],
      ['b', 2, false],
      ['c', undefined, true],
    ]);
  });

  it('should handle empty arrays', () => {
    const result = zip(['a', 'b'], [], [true, false]);
    expect(result).toEqual([
      ['a', undefined, true],
      ['b', undefined, false],
    ]);
  });
});
