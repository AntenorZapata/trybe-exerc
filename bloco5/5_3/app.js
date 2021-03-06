function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

const dezDaysList = [
  29,
  30,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
];

ulDays = document.querySelector("#days");
btnContainer = document.querySelector(".buttons-container");

const daysOfTheMonth = () => {
  dezDaysList.forEach((element) => {
    let li = document.createElement("li");

    li.innerText = element;
    ulDays.appendChild(li);

    if (element === 24 || element === 31) {
      li.className = "day holiday";
    } else if (element === 4 || element === 11 || element === 18) {
      li.className = "day friday";
    } else if (element === 25) {
      li.className = "day holiday friday";
    } else {
      li.className = "day";
    }
  });
};

daysOfTheMonth();

//========================================

const hollidays = (str) => {
  let btn = document.createElement("button");

  btn.innerText = str;
  btnContainer.appendChild(btn);
};

hollidays("Feriados");

//===================================================

let liHoliday = document.querySelectorAll(".holiday");

const bgHoliday = () => {
  btnContainer.firstChild.addEventListener("click", () => {
    for (let i of liHoliday) {
      i.classList.toggle("red");
    }
  });
};

bgHoliday();

//======================================================

const sextou = (str) => {
  let btnSexta = document.createElement("button");

  btnSexta.innerText = str;

  btnContainer.appendChild(btnSexta);
};

sextou("Sexta-Feira");

//======================================================

let btnSexta = btnContainer.lastChild;
let liFriday = document.querySelectorAll(".friday");
let liDay = document.querySelectorAll(".day");

const btnSextou = () => {
  let result = [];
  for (let e of liFriday) {
    result.push(e.innerText);
  }
  btnSexta.addEventListener("click", () => {
    for (let i in liFriday) {
      if (liFriday[i].innerText in dezDaysList) {
        liFriday[i].innerText = "PARTIU!";
      } else {
        liFriday[i].innerText = result[i];
      }
    }
  });
};

btnSextou();

//=================================================

const zoom = () => {
  for (let i of liDay) {
    i.addEventListener("mouseover", (e) => {
      e.target.style.transform = "scale(1.3)";
    });
  }
};

zoom();

//==============================================
const zoomOut = () => {
  for (let i of liDay) {
    i.addEventListener("mouseout", (e) => {
      e.target.style.transform = "scale(1)";
    });
  }
};

zoomOut();

//===============================================
let divTasks = document.querySelector(".my-tasks");
const task = (str) => {
  let todo = document.createElement("span");
  todo.innerText = str;
  divTasks.appendChild(todo);
};

task("cozinhar");

//===============================================

const insertSubtitle = (str) => {
  let divTodo = document.createElement("div");

  divTodo.className = "task";
  divTodo.style.backgroundColor = str;

  divTasks.appendChild(divTodo);
};

insertSubtitle("blue");

//==================================================

let divTodo = document.querySelector(".task");

const taskSelected = () => {
  divTodo.addEventListener("click", () => {
    if (divTodo.className === "task") {
      divTodo.classList = "task selected";
    } else {
      divTodo.classList = "task";
    }
  });
};

taskSelected();
//==============================================

const dayColor = () => {
  let color = divTodo.style.backgroundColor;

  for (let i of liDay) {
    i.addEventListener("click", () => {
      if (i.style.color === color) {
        i.style.color = "rgb(119,119,119)";
      } else {
        i.style.color = color;
      }
    });
  }
};

dayColor();

//=================================================

let btnAdd = document.querySelector("#btn-add");
let taskInput = document.querySelector("#task-input");
let divInput = document.querySelector(".input-container");
let ulList = document.querySelector(".task-list");
let taskList = document.querySelector(".task-list-container");

const addCompro = () => {
  btnAdd.addEventListener("click", () => {
    let task = document.createElement("li");
    task.innerText = taskInput.value;
    if (task.innerText === "") {
      alert("ADICIONAR");
    } else {
      ulList.appendChild(task);
      taskInput.value = "";
    }
  });

  taskInput.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
      let task = document.createElement("li");
      task.innerText = taskInput.value;
      if (task.innerText === "") {
        alert("ADICIONAR");
      } else {
        ulList.appendChild(task);
        taskInput.value = "";
      }
    }
  });
};

addCompro();
