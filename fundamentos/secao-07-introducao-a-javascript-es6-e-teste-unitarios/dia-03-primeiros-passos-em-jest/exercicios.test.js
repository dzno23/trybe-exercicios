const {sum, myRemove, myFizzBuzz, encode, decode, techList, hydrate} = require('./exercicios');

describe('Exercicio 1: In function sum()', () => {
  test('If sum(4, 5) return 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  test('If sum(0, 0) return 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  test('If throw an error when sum(4, "5")', () => {
    expect(() => sum(4, '5')).toThrow();
  });

  test('If throw an error "parameters must be numbers" when sum(4, "5")', () => {
    expect(() => sum(4, '5')).toThrow("parameters must be numbers");
  });

});

describe('Exercicio 2: In function myRemove()', () => {
  test('If myRemove([1, 2, 3, 4], 3) return [1, 2, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  test('If myRemove([1, 2, 3, 4], 3) not return [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  test('If myRemove([1, 2, 3, 4], 5) return [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });

});

describe('Exercicio 3: In function myFizzBuzz(num)', () => {
  test('If num of myFizzBuzz(num) is divisible by 3 and 5', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });

  test('If num of myFizzBuzz(num) is divisible only by 3', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });

  test('If num of myFizzBuzz(num) is divisible only by 5', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  });

  test('If num of myFizzBuzz(num) is not divisible by 3 and 5', () => {
    expect(myFizzBuzz(7)).toBe(7);
  });

  test('If num of myFizzBuzz(num) is not a number', () => {
    expect(myFizzBuzz('5')).toBe(false);
  });
});

describe('Exercicio 4: In functions encode(text) ans decode(text)', () => {
  test('If encode(text) is a function', () => {
    expect(typeof encode && typeof decode).toBe('function');
  });

  test('If encode(text) converts the vowels a, e, i, o, u to 1, 2, 3, 4, 5 respectively', () => {
    expect(encode('aeiou, uoiea')).toBe('12345, 54321');
  });

  test('If decode(text) converts the numbers 1, 2, 3, 4, 5 to a, e, i, o, u respectively', () => {
    expect(decode('12345, 54321')).toBe('aeiou, uoiea');
  });

  test('If encode(text) not converts consonants in number', () => {
    expect(encode('bcdfg, bcdfg')).toBe('bcdfg, bcdfg');
  });

  test('If decode(text) not converts number in consonantes', () => {
    expect(decode('6789, 9876')).toBe('6789, 9876');
  });

  test('If the string returned by the encode(text) is the same size as the attribute', () => {
    expect(encode('abc').length).toEqual(3);
  });

  test('If the string returned by the decode(text) is the same size as the attribute', () => {
    expect(decode('abc').length).toEqual(3);
  });
});

describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });

  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });

  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });

  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });

});

describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });

  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });

  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });

});
