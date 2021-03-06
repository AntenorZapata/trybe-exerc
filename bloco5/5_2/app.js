//declarando variáveis

let h1 = document.createElement("h1");
let div = document.createElement("div");
let divCenter = document.createElement("div");
let paragraph = document.createElement("p");
let divLeft = document.createElement("div");
let divRight = document.createElement("div");
let img = document.createElement("img");
let ul = document.createElement("ul");

//innerText e className

div.className = "main-content";
h1.innerText = "Exercício 5.2 - JavaScript DOM ";
h1.className = "title";
divCenter.className = " center-content";
paragraph.innerText = "eu sou um parágrafo";
divLeft.className = "left-content";
divRight.className = "right-content ";
img.className = "small-image ";
img.src = "https://picsum.photos/200";

//appendChild

document.body.appendChild(h1);
document.body.appendChild(div);
div.appendChild(divCenter);
divCenter.appendChild(paragraph);
div.appendChild(divLeft);
div.appendChild(divRight);
divLeft.appendChild(img);
divRight.appendChild(ul);

div.style.backgroundColor = "green";
divRight.style.marginRight = "auto";
div.removeChild(divLeft);

let lista = [
  "um",
  "dois",
  "três",
  "quatro",
  "cinco",
  "seix",
  "sete",
  "oito",
  "novo",
  "dez",
];

lista.forEach((element) => {
  let li = document.createElement("li");
  li.innerText = element;
  ul.appendChild(li);
});

ul.removeChild(ul.lastElementChild);
ul.removeChild(ul.lastElementChild);

for (let i = 0; i < 3; i++) {
  let title = document.createElement("h3");
  div.appendChild(title);
  title.className = "description";
  title.innerText = "H3";
}
