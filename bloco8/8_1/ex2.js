let num = 3;

const trueOrFalse = (num, sort) => {
  return num === sort;
};

const check = (num, testing) => {
  let sort = Math.ceil(Math.random() * 5);

  if (testing(num, sort)) {
    return 'parabéns';
  }
  return 'tente novamente';
};

console.log(check(num, trueOrFalse));
