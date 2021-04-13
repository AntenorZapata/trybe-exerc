const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (age) => {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrAnimals = Animals.filter((animal) => animal.age === age);
      if (arrAnimals) {
        return resolve(arrAnimals);
      }
      return reject({ error: 'Nenhum animal com essa idade!' });
    }, 100);
  });
};
// Adicione o código aqu

const getAnimal = (age) => {
  return findAnimalByName(age).then((animal) => animal);
};
// ---------------------

console.log(getAnimal('Dorminhoco'));

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal(1).then((animal) => {
        expect(animal[0]).toEqual([
          { name: 'Dorminhoco', age: 1, type: 'Dog' },
        ]);
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal(10).catch((error) =>
        expect(error).toEqual('Nenhum animal com essa idade!')
      );
    });
  });
});
