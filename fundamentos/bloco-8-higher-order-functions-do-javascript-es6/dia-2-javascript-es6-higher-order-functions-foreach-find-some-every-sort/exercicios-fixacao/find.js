// Exemplo 1

const numbers = [19, 21, 30, 3, 45, 22, 15];

const verifyEven = (number) => number % 2 === 0;

const isEven = numbers.find(verifyEven);

console.log(isEven); // 30

console.log(verifyEven(9)); // False
console.log(verifyEven(14)); // True

// Outra forma de ser realizada sem a necessidade de criar uma nova função.
const isEven2 = numbers.find((number) => number % 2 === 0);

console.log(isEven2); // 30

// Exercício de fixação 1
const numbers2 = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (element) => {
  // Adiciona seu código aqui
  return (element % 3 === 0 & element % 5 === 0);
};

console.log(numbers2.find(findDivisibleBy3And5));

// Exercício de fixação 2
const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (element) => {
  // Adicione seu código aqui:
  return (element.length > 4);
}

console.log(names.find(findNameWithFiveLetters));

// Exercício de fixação 3
const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

function findMusic(element) {
  // Adicione seu código aqui
  return (element.id === '31031685');
}

console.log(musicas.find(findMusic));