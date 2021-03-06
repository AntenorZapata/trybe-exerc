let salario = 3000;
let inss = 0;
let ir = 0;
let salarioBase = 0;

if (salario <= 1556.94) {
  inss = (8 / 100) * salario;
} else if (salario <= 2594.92) {
  inss = (9 / 100) * salario;
} else if (salario <= 5189.82) {
  inss = (11 / 100) * salario;
} else {
  inss = 570.88;
}

salarioBase = salario - inss;

if (salarioBase <= 1903.98) {
  ir = 0;
} else if (salarioBase <= 2826.65) {
  ir = (7.5 / 100) * salarioBase - 142.8;
} else if (salarioBase <= 3751.05) {
  ir = (15 / 100) * salarioBase - 354.8;
} else if (salarioBase <= 4664.68) {
  ir = (22.5 / 100) * salarioBase - 636.13;
} else {
  ir = (27.5 / 100) * salarioBase - 869.36;
}

salarioLiquido = salarioBase - ir;

console.log(salarioLiquido);
