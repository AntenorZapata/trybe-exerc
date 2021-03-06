let lowestIndex = (arr) => {
  let count = arr[0];

  for (let i of arr) {
    if (i < count) {
      count = i;
    }
  }

  return arr.indexOf(count);
};

console.log(lowestIndex([2, -4, 6, 7, -10, 0, -3])); //6
