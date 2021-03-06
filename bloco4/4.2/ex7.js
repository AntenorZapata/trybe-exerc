let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = numbers[0];

numbers.forEach((element) => {
  if (element < result) {
    result = element;
  }
});

console.log(result);
