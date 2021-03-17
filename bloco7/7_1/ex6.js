// exer 6

const changeString = (str) => {
  let result = 'Tryber x aqui!'.toLocaleLowerCase();
  let arr = result.split(' ');
  let frase = '';

  for (let word of arr) {
    if (word === 'x') {
      word = str;
      frase += `${word} `;
    } else {
      frase += `${word} `;
    }
  }
  return frase;
};
