const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

const reduceNames = (array) => {
  let nomesAutores = array.reduce((acc, obra) => {
    acc.push(obra.author.name);
    return acc;
  }, [])
  return nomesAutores.join(', ');
};

const averageAge = (array) => {
  return array.map((element) => element.releaseYear - element.author.birthYear).reduce((acc, crr) => acc + crr)/array.length;
};

const longestNamedBook = (array) => {
  return array.reduce((acc, obra) => {
    if (acc.name.length > obra.name.length) {
      return acc;
    }
    return obra;
  });
};

console.log(reduceNames(books));
console.log(averageAge(books));
console.log(longestNamedBook(books));
