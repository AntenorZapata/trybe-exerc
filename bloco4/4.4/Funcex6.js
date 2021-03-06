let sum = (n) => {
  let result = 0;
  for (let num = 0; num <= n; num++) {
    result += num;
  }
  return result;
};

console.log(sum(5));
