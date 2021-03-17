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

const countMath = (obj) => {
  arrOBj = Object.keys(obj);
  let count = 0;

  for (let key of arrOBj) {
    if (obj[key].materia === 'Matemática') {
      count += obj[key].numeroEstudantes;
    }
  }
  return count;
};

console.log(countMath(allLessons));
