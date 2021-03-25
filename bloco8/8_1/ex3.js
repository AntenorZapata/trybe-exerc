const correct = 'vqv';
const randomAnswer = 'Vqv';

const check = (a) => (b) => a === b.toLowerCase();

// thinking behind

const check = (a) => {
  return (b) => {
    return a === b.toLowerCase();
  };
};
console.log(check(correct)(randomAnswer));
