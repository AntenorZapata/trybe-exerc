const paragraph = () => {
  let paragrafo = document.getElementsByTagName("p")[1];
  paragrafo.innerText = "Vou estar trabalhando com programação";
};

paragraph();

const changeColor = () => {
  let divMain = document.getElementsByClassName("main-content")[0];

  divMain.style.backgroundColor = "rgb(76, 164, 109)";
};

changeColor();

const changeRedColor = () => {
  let divCenter = document.getElementsByClassName("center-content")[0];
  divCenter.style.backgroundColor = "white";
};

changeRedColor();

const corrector = () => {
  let title = document.getElementsByTagName("h1")[0];

  title.innerText = "Exercício 5.1 - JavaScript";
};

corrector();

const upperCase = () => {
  let paragrafo = document.querySelectorAll("p");
  paragrafo[0].innerText = paragrafo[0].innerText.toLocaleUpperCase();
};

upperCase();

const printText = () => {
  let p = document.getElementsByTagName("p");

  for (let paragraph of p) {
    console.log(paragraph.innerText);
  }
};

printText();
