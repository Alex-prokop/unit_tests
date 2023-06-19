const { MyFind } = require('../../methods/arrays/find');

const users = [
  { user: 'barney', age: 36, active: true },
  { user: 'fred', age: 40, active: false },
  { user: 'pebbles', age: 1, active: true },
];

describe('MyFind Function', () => {
  it('should find first object that satisfies the predicate function', () => {
    const result = MyFind(users, function (user) {
      return user.age < 40;
    });
    expect(result).toEqual({ user: 'barney', age: 36, active: true });
  });

  it('should find first object that matches the properties in the provided object', () => {
    const result = MyFind(users, { age: 1, active: true });
    expect(result).toEqual({ user: 'pebbles', age: 1, active: true });
  });

  it('should find first object that matches the value of the provided property', () => {
    const result = MyFind(users, ['active', false]);
    expect(result).toEqual({ user: 'fred', age: 40, active: false });
  });

  it('should find first object based on the truthiness of the provided property', () => {
    const result = MyFind(users, 'active');
    expect(result).toEqual({ user: 'barney', age: 36, active: true });
  });
});
