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
});
