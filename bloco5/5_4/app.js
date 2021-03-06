let divContainerBtns = document.querySelector(".btns");
let divParagraph = document.querySelector(".para");

for (let i = 0; i < 5; i += 1) {
  let paragraph = document.createElement("p");
  divParagraph.appendChild(paragraph);
  paragraph.innerText =
    " Lorem ipsum dolor sit amet, consectetur adipisicing eliLorem ipsum dolor sit amet, consectetur adipisicing eliLorem ipsum dolor sit amet, consectetur adipisicing eliLorem ipsum dolor sit amet, consectetur adipisicing eliLorem ipsum dolor sit amet, consectetur adipisicing eliLorem ipsum dolor sit amet, consectetur adipisicing eliLorem ipsum dolor sit amet, consectetur adipisicing eliLorem ipsum dolor sit amet, consectetur adipisicing eliLorem ipsum dolor sit amet, consectetur adipisicing eliLorem ipsum dolor sit amet, consectetur adipisicing eliLorem ipsum dolor sit amet, consectetur adipisicing eliLorem ipsum dolor sit amet, consectetur adipisicing eliLorem ipsum dolor sit amet, consectetur adipisicing eliLorem ipsum dolor sit amet, consectetur adipisicing eliLorem ipsum dolor sit amet, consectetur adipisicing eliLorem ipsum dolor sit amet, consectetur adipisicing eliLorem ipsum dolor sit amet, consectetur adipisicing eliLorem ipsum dolor sit amet, consectetur adipisicing eliLorem ipsum dolor sit amet, consectetur adipisicing eliLorem ipsum dolor sit amet, consectetur adipisicing eliLorem ipsum dolor sit amet, consectetur adipisicing eli";
}

let paragraphs = document.querySelectorAll("p");

window.onload = () => {
  createBtnsAndInputs();
};

function createBtnsAndInputs() {
  let bgColor = localStorage.getItem("bgcolor");
  let textColor = localStorage.getItem("textcolor");
  let fontSize = localStorage.getItem("fontSize");
  let lineHeight = localStorage.getItem("lineHeigth");
  let fontFamily = localStorage.getItem("fontFamily");

  document.body.style.backgroundColor = bgColor;
  for (let paragraph of paragraphs) {
    paragraph.style.color = textColor;
  }

  for (let paragraph of paragraphs) {
    paragraph.style.fontSize = `${fontSize}px`;
  }

  for (let paragraph of paragraphs) {
    paragraph.style.lineHeight = `${lineHeight}%`;
  }
  for (let paragraph of paragraphs) {
    paragraph.style.fontFamily = `${fontFamily}`;
  }

  //labels e classes pra inserir dinamicamente em cada botão e input.

  let labels = [
    "Color Name: ",
    "Text Color: ",
    "Font Size (px): ",
    "Line Height (%): ",
    "Font Family (name): ",
  ];
  let btnLabels = ["Set BG", "Set Color", "Set Size", "Set Height", "Set Font"];
  let btnsClass = [
    "btn-bg-color",
    "btn-text-color",
    "set-font-size",
    "set-line-height",
    "set-font-family",
  ];
  let inputsCLass = [
    "bg-color",
    "text-color",
    "set-size",
    "set-height",
    "set-family",
  ];

  //criando btns, labels, inputs e divs.

  for (let i = 0; i < 5; i += 1) {
    let divBtn = document.createElement("div");
    divBtn.className = "btn";
    divContainerBtns.appendChild(divBtn);
    let label = document.createElement("label");
    label.innerText = labels[i];
    divBtn.appendChild(label);
    let input = document.createElement("input");
    input.className = inputsCLass[i];
    divBtn.appendChild(input);
    let btn = document.createElement("button");
    btn.innerText = btnLabels[i];
    btn.className = btnsClass[i];
    divBtn.appendChild(btn);
  }

  let btnTextColor = document.querySelector(".btn-text-color");
  let inputTextColor = document.querySelector(".text-color");
  changeColorText(btnTextColor, inputTextColor);

  let btnBgColor = document.querySelector(".btn-bg-color");
  let inputColor = document.querySelector(".bg-color");
  changeBgColor(btnBgColor, inputColor);

  let btnSetFontSIze = document.querySelector(".set-font-size");
  let inputFontSize = document.querySelector(".set-size");
  changeFontSize(btnSetFontSIze, inputFontSize);

  let btnLineHeight = document.querySelector(".set-line-height");
  let inputLineHeight = document.querySelector(".set-height");
  changeLineHeight(btnLineHeight, inputLineHeight);

  let inputFontFamily = document.querySelector(".set-family");
  let btnFontFamily = document.querySelector(".set-font-family");
  changeFontFamily(btnFontFamily, inputFontFamily);
}

// Set BGColor, TextColor, FontSize, LineHeigth, FontFamily ===

const setBgColor = (input) => {
  document.body.style.backgroundColor = input.value;
  localStorage.setItem("bgcolor", input.value);
  input.value = "";
};

const setTextColor = (input) => {
  localStorage.setItem("textcolor", input.value);

  for (let paragraph of paragraphs) {
    paragraph.style.color = input.value;
  }
  input.value = "";
};

const setFontSize = (input) => {
  localStorage.setItem("fontSize", input.value);
  for (let paragraph of paragraphs) {
    paragraph.style.fontSize = `${input.value}px`;
  }
  input.value = "";
};

const setLineHeigth = (input) => {
  localStorage.setItem("lineHeigth", input.value);
  for (let paragraph of paragraphs) {
    paragraph.style.lineHeight = `${input.value}%`;
  }
  input.value = "";
};

const setFontFamily = (input) => {
  localStorage.setItem("fontFamily", input.value);
  for (let paragraph of paragraphs) {
    paragraph.style.fontFamily = `${input.value}`;
  }
  input.value = "";
};

// Change BG Color =========================

const changeBgColor = (btn, input) => {
  btn.addEventListener("click", () => {
    setBgColor(input);
  });

  input.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
      setBgColor(input);
    }
  });
};

// CHange Text Color ===================

const changeColorText = (btn, input) => {
  btn.addEventListener("click", () => {
    setTextColor(input);
  });

  input.addEventListener("keydown", (e) => {
    e.keyCode === 13 ? setTextColor(input) : null;
  });
};

// Change Font Size ===================

const changeFontSize = (btn, input) => {
  btn.addEventListener("click", () => {
    setFontSize(input);
  });

  input.addEventListener("keydown", (e) => {
    e.keyCode === 13 ? setFontSize(input) : null;
  });
};

// Change line height =========================

const changeLineHeight = (btn, input) => {
  btn.addEventListener("click", () => {
    setLineHeigth(input);
  });

  input.addEventListener("keydown", (e) => {
    e.keyCode === 13 ? setLineHeigth(input) : null;
  });
};

//Change font Family =======================

const changeFontFamily = (btn, input) => {
  btn.addEventListener("click", () => {
    setFontFamily(input);
  });

  input.addEventListener("keydown", (e) => {
    e.keyCode === 13 ? setFontFamily(input) : null;
  });
};
