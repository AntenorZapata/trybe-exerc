// exer 5

const btn = document.querySelector('.btn');
const titleCount = document.querySelector('.count');

let counter = 0;
const clickCount = () => {
  counter += 1;
  titleCount.innerText = `o valor é: ${counter}`;
};

btn.addEventListener('click', clickCount);
