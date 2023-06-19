const { omit } = require('../../methods/objects/omit');

describe('Omit Function', () => {
  const object = { a: 1, b: '2', c: 3 };

  it('should return an object without the omitted keys', () => {
    const result = omit(object, ['a', 'c']);
    expect(result).toEqual({ b: '2' });
  });

  it('should return the same object when no keys are omitted', () => {
    const result = omit(object, []);
    expect(result).toEqual(object);
  });

  it('should return an empty object when all keys are omitted', () => {
    const result = omit(object, ['a', 'b', 'c']);
    expect(result).toEqual({});
  });
  it('should handle pick() called with no arguments', () => {
    expect(() => {
      omit();
    }).not.toThrow('No arguments provided');
  });
});
