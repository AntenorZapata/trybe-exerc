"use restrict";

let head = document.querySelector("#header-container");
let box1 = document.querySelector(".emergency-tasks");
let box2 = document.querySelector(".no-emergency-tasks");
let title1 = document.querySelectorAll(".emergency-tasks h3");
let title2 = document.querySelectorAll(".no-emergency-tasks h3");
let footer = document.getElementById("footer-container");
head.style.backgroundColor = "green";
head.style.color = "white";
box1.style.backgroundColor = "orange";
box2.style.backgroundColor = "yellow";

title1.forEach((element) => {
  element.style.backgroundColor = "pink";
  element.style.color = "white";
});

title2.forEach((element) => {
  element.style.backgroundColor = "black";
  element.style.color = "white";
});

footer.style.backgroundColor = "green";
footer.style.color = "white";
