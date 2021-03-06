let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let sum = numbers.reduce((soma, num) => {
  return soma + num;
});

let media = sum / numbers.length;

if (media > 20) {
  console.log("valor maior que 20");
} else {
  console.log("valor menor ou igual a 10");
}
