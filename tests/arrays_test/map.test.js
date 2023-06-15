const { MyMap } = require('../../methods/arrays/map');

const square = (n) => n * n;

describe('MyMap Function', () => {
  it('should map array with a function', () => {
    const result = MyMap([4, 8], square);
    expect(result).toEqual([16, 64]);
  });

  it('should map object with a function', () => {
    const result = MyMap({ a: 4, b: 8 }, square);
    expect(result).toEqual([16, 64]);
  });

  it('should map array with a property string', () => {
    const users = [{ user: 'barney' }, { user: 'fred' }];
    const result = MyMap(users, 'user');
    expect(result).toEqual(['barney', 'fred']);
  });
});
