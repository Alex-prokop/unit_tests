const { merge } = require('../../methods/objects/merge');

describe('Merge Function', () => {
  it('should merge two objects', () => {
    const object = {
      a: [{ b: 2 }, { d: 4 }],
    };
    const other = {
      a: [{ c: 3 }, { e: 5 }],
    };
    const result = merge(object, other);
    expect(result).toEqual({
      a: [
        { b: 2, c: 3 },
        { d: 4, e: 5 },
      ],
    });
  });

  it('should handle empty objects', () => {
    const object = {};
    const other = {};
    const result = merge(object, other);
    expect(result).toEqual({});
  });

  it('should handle non-object values', () => {
    const object = { a: 1, b: 2 };
    const other = { a: 3, c: 4 };
    const result = merge(object, other);
    expect(result).toEqual({ a: 3, b: 2, c: 4 });
  });

  it('should deep merge objects', () => {
    const object = { a: { b: 1, c: 1 }, d: 1 };
    const other = { a: { b: 2 }, d: { e: 2 } };
    const result = merge(object, other);
    expect(result).toEqual({ a: { b: 2, c: 1 }, d: { e: 2 } });
  });
});
