const assert = require('assert');

const names = [
  'Aanemarie',
  'Adervandes',
  'Akifusa',
  'Abegildo',
  'Adicellia',
  'Aladonata',
  'Abeladerco',
  'Adieidy',
  'Alarucha',
];

function containsA() {
  const count = names.reduce((result, item) => {
    for (let letter of item) {
      if (letter.toLocaleLowerCase() === 'a') {
        result += 1;
      }
    }
    return result;
  }, 0);

  return count;
}

assert.deepStrictEqual(containsA(), 20);
