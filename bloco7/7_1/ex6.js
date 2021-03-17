
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
  
  // Or
  
  const arr = ['Html', 'Css', 'Javascript', 'Python', 'React'];
  
  const changeString = (str) => {
    let string = `Tryber, é ${str} aqui! `;
  
    let result = `${string}Essas são minhas skills: `;
  
    arr.forEach((i) => {
      result += `    
      ${i}`;
    });
    return `${result}
  
    #goTryber`;
  };