let mostOcc = (arr) => {
  let numbers = {};

  numbers = {};

  let count = 0;
  let result = 0;

  // add elementos do array no objeto "numbers".

  for (let item of arr) {
    numbers[item] = 0;
  }

  // conta o número de ocorrências de cada elemento do array comparando com o objeto numbers.

  for (let num of arr) {
    numbers[num] += 1;
  }

  for (let occ of arr) {
    if (numbers[occ] > count) {
      count = numbers[occ];
      result = occ;
    }
  }

  return result;
};

console.log(mostOcc([2, 3, 2, 5, 8, 2, 2, 2, 2, 2, 2, 3]));
