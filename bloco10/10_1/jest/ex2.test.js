const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' },
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
    if (users[id]) {
      return resolve(users[id]);
    }

    return reject({ error: 'User with ' + id + ' not found.' });
  });
};

const getUserName = (userID) => {
  return findUserById(userID).then((user) => user.name);
};

// describe('Quando o tipo do animal existe', () => {
//   test('Retorne a lista de animais', () => {
//     expect.assertions(2);
//     return getListAnimals('Dog').then(listDogs => {
//       expect(listDogs[0].name).toEqual('Dorminhoco');
//       expect(listDogs[1].name).toEqual('Soneca');
//     });
//   });
// });

describe('When user is found', () => {
  test('return user name', () => {
    return getUserName(4).then((nome) => {
      expect(nome).toEqual('Mark');
    });
  });

  test('return user name', () => {
    expect.assertions(1);
    return getUserName(2).catch((error) => {
      expect(error).toEqual({ error: 'User with ' + 2 + ' not found.' });
    });
  });
});
