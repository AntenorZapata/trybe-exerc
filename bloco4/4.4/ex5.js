let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  recorrente: "Sim",
};

let novo = {
  personagem: "Tio patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim",
};

for (let prop in info) {
  if (prop === "recorrente" && info[prop] === "Sim" && novo[prop] === "Sim") {
    console.log("Ambos recorrentes");
  } else {
    console.log(`${info[prop]} e ${novo[prop]}`);
  }
}
