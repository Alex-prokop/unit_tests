const { omitBy } = require('../../methods/objects/omitBy');

describe('OmitBy Function', () => {
  const object = { a: 1, b: '2', c: 3 };

  it('should omit properties that match the predicate', () => {
    const result = omitBy(object, (val) => typeof val === 'number');
    expect(result).toEqual({ b: '2' });
  });

  it('should not omit any properties if none match the predicate', () => {
    const result = omitBy(object, (val) => typeof val === 'boolean');
    expect(result).toEqual(object);
  });

  it('should omit all properties if all match the predicate', () => {
    const result = omitBy(object, (val) => true);
    expect(result).toEqual({});
  });
});
