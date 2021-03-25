const assert = require('assert');

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

const expectedResult = 'O Senhor dos Anéis';

function authorWith3DotsOnName() {
  const arr = books.map((element) => {
    return element.author.name;
  });

  let arr2 = [];
  let count = 0;
  let result = '';

  for (let name of arr) {
    arr2 = name.split('');
    for (let item of arr2) {
      if (item === '.') {
        count += 1;
        if (count === 3) {
          result = name;
        }
      }
    }
  }

  const final = books.filter((i) => i.author.name === result);

  return final[0].name;
}

assert.deepStrictEqual(authorWith3DotsOnName(), expectedResult);

//  bad solution, but it works - sorry
