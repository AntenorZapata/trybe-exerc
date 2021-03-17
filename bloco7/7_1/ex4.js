// exer 4

const longestWord = (str) => {
  let result = '';
  let frase = str.split(' ');
  let count = 0;

  for (let word of frase) {
    if (word.length >= count) {
      count = word.length;
      result = word;
    }
  }
  return result;
};
