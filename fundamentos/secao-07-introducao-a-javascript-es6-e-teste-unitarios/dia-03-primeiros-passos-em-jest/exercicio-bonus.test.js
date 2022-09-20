const {searchEmployee} = require('./exercicios-bonus');

describe('Testes da função searchEmployee', () => {
  test('Verifica se a função foi declarada', () => {
    expect(searchEmployee).toBeDefined();
  });

  test('Verifica se a função realmente é uma função', () => {
    expect(typeof searchEmployee).toBe('function');
  });

  test('Verifica se a função retorna um objeto', () => {
    expect(typeof searchEmployee()).toBe('object');
  });

  test('Verifica se o id existe na professionalBoard', () => {
    const id = '8579-6';
    expect(id).toEqual(professionalBoard);
  });

});
