// Exercicio 1
function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
};

// Exercicios 2
function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// Exercicios 3
function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// Exercicios 4
const vogais = ['a', 'e', 'i', 'o', 'u'];
const code = [1, 2, 3, 4, 5];

function encode(text) {
  const caracters = text.split('');
  caracters.forEach((letra, i) => {
    vogais.forEach((vogal, k) => {
      caracters[i] = (letra === vogal) ? code[k] : caracters[i];
    });
  });

  return caracters.join('');
}

function decode(text) {
  const caracters = text.split('');
  caracters.forEach((caracter, i) => {
    code.forEach((num, k) => {
      caracters[i] = (caracter === num.toString()) ? vogais[k] : caracters[i];
    });
  });

  return caracters.join('');
}

// Exercicio 5
function techList(array, name) {
  if (array.length === 0) {
    return 'Vazio!';
  }
  const arrayAlphabetic = array.sort();
  const listOfTechs = [];
  for (let index = 0; index < arrayAlphabetic.length; index += 1) {
    listOfTechs.push({'tech': arrayAlphabetic[index], 'name': name});
  }
  return listOfTechs;
};

// Exercicio 6
const hydrate = (string) => {
  const drinkingGlasses = string.split(' ');
  let sum = 0;
  for (let index = 0; index < drinkingGlasses.length; index += 1) {
    let numberInString = parseInt(drinkingGlasses[index]);
    if (numberInString > 0) {
      sum += numberInString;
    };
  };
  if (sum === 1) {
    return `${sum} copo de água`;
  }
  return `${sum} copos de água`;
};

module.exports = {sum, myRemove, myFizzBuzz, encode, decode, techList, hydrate};
