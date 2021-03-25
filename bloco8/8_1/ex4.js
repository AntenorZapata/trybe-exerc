const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkAnswer = (arr1, arr2) => {
  let count = 0;

  for (let grade in arr2) {
    if (arr2[grade] === arr1[grade]) {
      count += 1;
    } else if (arr2[grade] === 'N.A') {
      count += 0;
    } else {
      count -= 0.5;
    }
  }
  return count;
};

const checkHOF = (arr1, arr2, check) => {
  return check(arr1, arr2);
};

console.log(checkHOF(rightAnswers, studentAnswers, checkAnswer));
