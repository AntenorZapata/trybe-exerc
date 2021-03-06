let num = 97;
primo = 0;

for (let i = 2; i < num; i++) {
  if (num % i === 0) {
    primo += 1;
  }
}

if (primo > 0) {
  console.log("não é primo");
} else {
  console.log("é primo");
}
