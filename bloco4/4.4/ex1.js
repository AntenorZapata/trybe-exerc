//EXERCICIOS PRELIMINARES

let name = "Marta";
let lastName = "Silva";
let age = 34;
let medals = { golden: 2, silver: 3 };

let player = {
  name: "Marta",
  lastName: "Silva",
  age: 34,
  medals: { golden: 2, silver: 3 },
};

console.log(
  `A jogadora ${player.name} ${player.lastName} tem ${player.age} anos`
);
//==============================================

let bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

player.bestInTheWorld = bestInTheWorld;
player["bestInTheWorld"] = [2006, 2007, 2008, 2009, 2010, 2018];

console.log(
  `A jogadora ${player.name} ${player.lastName} foi a melhor por ${player.bestInTheWorld.length} vezes`
);

console.log(
  `A jogadora ${player.name} ${player.lastName} possui ${player.medals.golden} medalhas de ouro e ${player.medals.silver} de prata `
);
console.log("======================================================");

let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

console.log(`Bem vinda, ${info.personagem}`);
