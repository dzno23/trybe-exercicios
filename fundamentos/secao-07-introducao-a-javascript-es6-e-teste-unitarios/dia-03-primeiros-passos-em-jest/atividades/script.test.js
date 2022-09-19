const sum = require('./script');

test('Verifica a soma de 1 e 2', () => {
  expect(sum(1, 2)).toBe(3);
});
