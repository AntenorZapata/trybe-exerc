let romans = (str) => {
  let numbers = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let value = 0;

  for (let n = 0; n < str.length; n++) {
    let numbersN = numbers[str[n]]; // PRIMEIRO VALOR DE STR
    let numbersNplus = numbers[str[n + 1]]; // SEGUNDO VALOR DE STR

    if (numbersNplus) {
      if (numbersN >= numbersNplus) {
        value += numbersN;
      } else {
        if (numbers[str[n + 2]]) {
          value += numbersNplus - numbersN;
          n += 1;
        } else {
          value += numbersNplus - numbersN;
          break;
        }
      }
    } else {
      value += numbersN;
    }
  }
  return value;
};

console.log(romans("XIX"));
console.log(romans("XXIV"));
console.log(romans("MMXVIII"));
console.log(romans("CCXLIII"));
console.log(romans("XI"));
console.log(romans("XII"));
console.log(romans("XV"));
console.log(romans("XXV"));
console.log(romans("IX"));
