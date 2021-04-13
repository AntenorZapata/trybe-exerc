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

describe('When user is found', () => {
  test('return user name', async () => {
    const name = await getUserName(4);
    expect(name).toEqual('Mark');
  });

  test('reject', async () => {
    try {
      await getUserName(2);
    } catch (error) {
      expect(error).toEqual({ error: 'User with ' + 2 + ' not found.' });
    }
  });
});
