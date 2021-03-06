// REFATORAR URGENTE

function funnySum(num1, num2) {
  let item1 = num1.toString();
  let item2 = num2.toString();
  let first = 0;
  let slic1 = 0;
  let slic2 = 0;

  let count = "";

  if (item1.length > item2.length) {
    slic1 = item1.slice(item1.length - item2.length);
    first = item1.slice(0, item1.length - item2.length);

    for (let i = 0; i < slic1.length; i++) {
      count += Number(slic1[i]) + Number(item2[i]);
    }
  } else if (item2.length > item1.length) {
    slic2 = item2.slice(item2.length - item1.length);
    first = item2.slice(0, item2.length - item1.length);
    for (let i = 0; i < slic2.length; i++) {
      count += Number(slic2[i]) + Number(item1[i]);
    }
  } else {
    for (let i = 0; i < item1.length; i++) {
      count += Number(item1[i]) + Number(item2[i]);
    }
  }

  return Number(`${first}` + `${count}`);
}

console.log(funnySum(16, 18));
console.log(funnySum(1236, 30977));
