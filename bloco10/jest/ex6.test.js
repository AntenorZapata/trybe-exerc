const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrAnimals = Animals.find((animal) => animal.name === name);
      if (arrAnimals) {
        return resolve(arrAnimals);
      }
      return reject({ error: 'Nenhum animal com esse nome!' });
    }, 100);
  });
};
// Adicione o código aqu

const getAnimal = (name) => {
  return findAnimalByName(name).then((animal) => animal);
};
// ---------------------

console.log(getAnimal('Dorminhoco'));

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then((animal) => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch((error) =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });
});
