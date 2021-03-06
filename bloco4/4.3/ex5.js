let n = 7;
let middle = (n + 1) / 2;
let middleLeft = middle;
let middleRight = middle;
let result = "";

for (let j = 0; j < middle; j++) {
  for (let i = 1; i < n + 1; i++) {
    if (i < middleRight && i > middleLeft) {
      result += "*";
    } else {
      result += " ";
    }
  }
  middleLeft -= 1;
  middleRight += 1;
  console.log(result);
  result = "";
}

//middle é o centro da row. A condição fica: se i < middle ou i > middle, quer dizer que não é o centro, então, vazio. Depois só ir diminuindo e aumentando
//o valor do middle.
