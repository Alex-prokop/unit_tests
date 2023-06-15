const { myFilter } = require('../../methods/arrays/myFilter');

const users = [
  { user: 'barney', age: 36, active: true },
  { user: 'fred', age: 40, active: false },
];

describe('myFilter Function', () => {
  it('should filter objects based on the predicate function', () => {
    const result = myFilter(users, function (o) {
      return !o.active;
    });
    expect(result).toEqual([{ user: 'fred', age: 40, active: false }]);
  });

  it('should filter objects that match the properties in the provided object', () => {
    const result = myFilter(users, { age: 36, active: true });
    expect(result).toEqual([{ user: 'barney', age: 36, active: true }]);
  });

  it('should filter objects that match the value of the provided property', () => {
    const result = myFilter(users, ['active', false]);
    expect(result).toEqual([{ user: 'fred', age: 40, active: false }]);
  });

  it('should filter objects based on the truthiness of the provided property', () => {
    const result = myFilter(users, 'active');
    expect(result).toEqual([{ user: 'barney', age: 36, active: true }]);
  });
});
