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

const assignAll = () => {
  const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

  return allLessons;
};

const allStudents = (all) => {
  let count = 0;
  let arrAll = Object.keys(all);

  for (let key of arrAll) {
    count += all[key].numeroEstudantes;
  }
  return count;
};

console.log(allStudents(assignAll()));
