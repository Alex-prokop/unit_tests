const { pick } = require('../../methods/objects/pick');

describe('Pick Function', () => {
  const object = { a: 1, b: '2', c: 3 };

  it('should pick specified properties from the object', () => {
    const result = pick(object, ['a', 'c']);
    expect(result).toEqual({ a: 1, c: 3 });
  });

  it('should return an empty object if no properties are specified to be picked', () => {
    const result = pick(object, []);
    expect(result).toEqual({});
  });

  it('should only pick properties that exist in the object', () => {
    const result = pick(object, ['a', 'd']);
    expect(result).toEqual({ a: 1 });
  });
});
