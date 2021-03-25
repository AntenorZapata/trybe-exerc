// exer 1
const person = (nick) => {
  return {
    nomeCompleto: nick,
    email: `${nick.split(' ').join('_')}@trybe.com`,
  };
};

const newEmployees = (action) => {
  const employees = {
    id1: action('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro
    id2: action('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro
    id3: action('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro
  };
  return employees;
};

console.log(newEmployees(person));
