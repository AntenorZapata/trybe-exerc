
// let a = 10;
// let b = 20;

// let sum = a + b;
// let sub = a - b;
// let mult = a * b;
// let div = a / b;

// console.log(sum);


const calculator = (num1,num2, operator) => {

    if(operator === '+'){
        return num1 + num2
    } else if(operator === '-'){
        return num1 - num2
    } else if(operator === '*') {
        return num1 * num2
    } else if (operator === '/'){
        return num1 / num2
    } else {
        return 'operação inválida'
    }    
}

let noks = 23



console.log(calculator(10,4,'*'));