const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const getValueByNumber = (obj, index) => {
  const keys = Object.keys(obj);

  for (let key of keys) {
    return lesson1[keys[index]];
  }

  // or

  return Object.values(obj)[index];
};

console.log(getValueByNumber(lesson1, 0));
