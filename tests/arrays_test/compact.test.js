const { compact } = require('../../methods/arrays/compact');
describe('Compact Function', () => {
  it('should remove all falsy values from the array', () => {
    expect(compact([0, 1, false, 2, '', 3])).toEqual([1, 2, 3]);
  });

  it('should return an empty array if all elements are falsy', () => {
    expect(compact([0, false, '', null, undefined])).toEqual([]);
  });

  it('should return the same array if there are no falsy values', () => {
    expect(compact([1, 'a', {}, []])).toEqual([1, 'a', {}, []]);
  });

  it('should handle arrays with all types of falsy values', () => {
    expect(compact([NaN, 0, false, '', null, undefined])).toEqual([]);
  });

  it('should handle an empty array', () => {
    expect(compact([])).toEqual([]);
  });
});
