const area = require('./scripts3');

test('3,14 times 3 ** 2 equal to 28.26', () => {
  expect(area(3)).toBe(28.26);
});