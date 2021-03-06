let arr = ["José", "Lucas", "Nádia", "Fernanda", "Cairomateuslucas", "Joana"];

let biggestName = (arr) => {
  let name = 0;
  let count = 0;
  let pessoa = "";

  for (let element of arr) {
    for (let letter of element) {
      name += 1;
    }

    if (name > count) {
      count = name;
      pessoa = element;
    }
    name = 0;
  }
  return pessoa;
};

console.log(biggestName(arr));
