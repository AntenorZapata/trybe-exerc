let endOfName = (word, ending) => {
  let final = ending.split("");
  let count = 0;

  let numFinal = word.length - final.length;

  for (let i = numFinal; i < word.length; i++) {
    if (word[i] === final[count]) {
      count += 1;
    }
  }
  if (count === final.length) {
    return true;
  } else {
    return false;
  }
};

console.log(endOfName("joaofernando", "ando"));
