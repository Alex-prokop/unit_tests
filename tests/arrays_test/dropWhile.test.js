const { dropWhile } = require('../../methods/arrays/dropWhile');

const users = [
  { user: 'barney', active: false },
  { user: 'fred', active: false },
  { user: 'pebbles', active: true },
];

describe('DropWhile Function', () => {
  it('should drop elements until the predicate function returns false', () => {
    const result = dropWhile(users, function (o) {
      return !o.active;
    });
    expect(result).toEqual([{ user: 'pebbles', active: true }]);
  });

  it('should drop elements that match the properties in the provided object', () => {
    const result = dropWhile(users, { user: 'barney', active: false });
    expect(result).toEqual([
      { user: 'fred', active: false },
      { user: 'pebbles', active: true },
    ]);
  });

  it('should drop elements that match the value of the provided property', () => {
    const result = dropWhile(users, ['active', false]);
    expect(result).toEqual([{ user: 'pebbles', active: true }]);
  });

  it('should drop elements until an element with the provided property is found', () => {
    const result = dropWhile(users, 'active');
    expect(result).toEqual([
      { user: 'barney', active: false },
      { user: 'fred', active: false },
      { user: 'pebbles', active: true },
    ]);
  });
});
