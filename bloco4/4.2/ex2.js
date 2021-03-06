let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// PRIMEIRA POSSIBILIDADE

let cont = 0;

numbers.forEach((element) => {
  cont += element;
});

console.log(cont);

// SEGUNDA POSSIBILIDADE

let soma = numbers.reduce((sum, num) => {
  return sum + num;
}, 0);

console.log(soma);
