let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = [];
let count = 1;

numbers.forEach((element) => {
  if (numbers[numbers.indexOf(element) + 1]) {
    result.push(element * numbers[count]);
    count += 1;
  } else {
    result.push(element * 2);
  }
});

console.log(result);
