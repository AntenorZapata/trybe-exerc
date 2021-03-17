const allLessons = {
  lesson1: {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  },

  lesson2: {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  },

  lesson3: {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  },
};
const createReport = (obj, name) => {
  arrOBj = Object.keys(obj);
  const report = {};
  let count = 0;
  let materia = [];

  for (let key of arrOBj) {
    if (allLessons[key].professor === 'Maria Clara') {
      report.professor = obj[key].professor;
      materia.push(obj[key].materia);
      count += obj[key].numeroEstudantes;
    }
  }
  report.aulas = materia;
  report.estudantes = count;

  return report;
};

console.log(createReport(allLessons, 'Maria Clara'));
/* {
    professor: 'Maria Clara',
    aulas: [ 'Matemática', 'Matemática' ],
    estudantes: 30
  } */
