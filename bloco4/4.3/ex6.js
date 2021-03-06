const printTriangule = (n) => {
  if (n % 2 === 0) {
    n -= 1;
  }

  let middle = (n + 1) / 2;
  let middleLeft = middle;
  let middleRight = middle;
  let result = "";

  for (let j = 0; j < middle; j++) {
    for (let i = 1; i < n + 1; i++) {
      if (middleLeft === 1) {
        result += "*";
      } else {
        if (i === middleLeft || i === middleRight) {
          result += "*";
        } else {
          result += " ";
        }
      }
    }

    middleLeft -= 1;
    middleRight += 1;
    console.log(result);
    result = "";
  }
};
printTriangule(8);
