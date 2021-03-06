let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let numberOfOdds = 0;

numbers.forEach((element) => {
  if (element % 2 !== 0) {
    numberOfOdds += 1;
  }
});

if (numberOfOdds > 0) {
  console.log(numberOfOdds);
} else {
  console.log("nenhum valor ímpar encontrado");
}
