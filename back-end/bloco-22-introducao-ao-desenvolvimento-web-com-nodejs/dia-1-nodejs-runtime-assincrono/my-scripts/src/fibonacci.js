const readline = require('readline-sync')

const printFibonacci = () => {
  let length = 0;
  while (length < 1) length = readline.questionInt('What length? ');

  let fibonacciFirst = 0;
  let fibonacciSecond = 1;

  for(let i = 1; i <= length; i += 1) {
    console.log(fibonacciSecond);
    const aux = fibonacciSecond;
    fibonacciSecond += fibonacciFirst;
    fibonacciFirst = aux;
  }
}

const askNumber = () => {
  const number = readline.questionInt('Type a number: ');
  
  if(typeof number !== 'number') throw new Error('Informe apenas números');

  return number;
}

const checkNumber = () => {
  return new Promise((resolve, reject) => {
    const firstNumber = askNumber();
    const secondNumber = askNumber();
    const thirdNumber = askNumber();

    const result = (firstNumber + secondNumber) * thirdNumber;
    console.log(result);
    if (result < 50) return reject(new Error('Informe apenas números'));
    resolve(result);
  });
}

async function main() {
  // printFibonacci();
  checkNumber();
}

main();