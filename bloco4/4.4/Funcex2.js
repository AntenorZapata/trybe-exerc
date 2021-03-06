let result = 0;

let higherIndex = (arr) => {
  arr.forEach((element) => {
    if (element > result) {
      result = element;
    }
  });
  return arr.indexOf(result);
};

console.log(higherIndex([2, 65, 7, 10, 45, 2, 34]));
