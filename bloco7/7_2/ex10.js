const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const pairValues = (obj, key, value) => {
  const arrEntries = Object.entries(obj);
  let result = false;

  for (let pair of arrEntries) {
    if (pair[0] === key && pair[1] === value) {
      result = true;
    }
  }
  return result;
};

console.log(pairValues(lesson3, 'turno', 'noite'));
