const assert = require('assert');

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [
  [9, 8, 10, 7, 5],
  [10, 9, 9, 10, 8],
  [10, 7, 10, 8, 9],
];

function studentAverage() {
  for (let i = 0; i < students.length; i += 1) {
    return students.map((j, index) => {
      return (obj = {
        name: j,
        average:
          grades[index].reduce((result, item) => {
            return result + item;
          }) / grades[index].length,
      });
    });
  }
}

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

assert.deepStrictEqual(studentAverage(), expected);
