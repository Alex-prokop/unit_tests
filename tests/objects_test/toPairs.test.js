const { pickBy } = require('../../methods/objects/pickBy');

describe('PickBy Function', () => {
  const object = { a: 1, b: '2', c: 3 };

  it('should pick properties based on the predicate function', () => {
    const result = pickBy(object, (val) => typeof val === 'number');
    expect(result).toEqual({ a: 1, c: 3 });
  });

  it('should return an empty object if no properties match the predicate', () => {
    const result = pickBy(object, (val) => typeof val === 'boolean');
    expect(result).toEqual({});
  });

  it('should return all properties if all match the predicate', () => {
    const result = pickBy(object, () => true);
    expect(result).toEqual(object);
  });

  it('should handle an empty object', () => {
    const emptyObject = {};
    const result = pickBy(emptyObject, () => true);
    expect(result).toEqual({});
  });

  it('should handle a large object', () => {
    const largeObject = {
      a: 1,
      b: 2,
      c: 3,
      d: 4,
      e: 5,
      f: 6,
      g: 7,
      h: 8,
      i: 9,
      j: 10,
    };
    const result = pickBy(largeObject, (val) => val % 2 === 0);
    expect(result).toEqual({ b: 2, d: 4, f: 6, h: 8, j: 10 });
  });

  it('should handle non-primitive property values', () => {
    const objectWithObjects = {
      a: { nested: 'value' },
      b: { nested: 'value' },
      c: { nested: 'value' },
    };
    const result = pickBy(objectWithObjects, (val) => typeof val === 'object');
    expect(result).toEqual({
      a: { nested: 'value' },
      b: { nested: 'value' },
      c: { nested: 'value' },
    });
  });
});
