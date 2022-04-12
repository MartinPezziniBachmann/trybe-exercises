// Exemplo 1
const numbers = [32, 15, 3, 2, -5, 56, 10];

const sumNumbers = numbers.reduce((result, number) => result + number); // O parâmetro `result` é o acumulador. Ele recebe, do `reduce`, o retorno da função a cada iteração.
console.log(sumNumbers); // 113

// Ou seja:

const getSum = (result, number) => result + number;
const sumNumbers2 = numbers.reduce(getSum);
console.log(sumNumbers2); // 113

// Exemplo 2
const getSum2 = (result, number) => {
  console.log(result); // 0 32 47 50 52 47 103
  return result + number;
  };
const sumNumbers3 = numbers.reduce(getSum2, 0); // Parâmetro adicionado ao reduce: o "0"
console.log(sumNumbers3); // 113

// Exercicio de fixação 1
const getBigger = (result, number) => (number > result) ? number : result;
const biggerNumber = numbers.reduce(getBigger);
console.log(biggerNumber);

// Exercicio de fixação 2
const numbers2 = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumEven = (result, number) => (number % 2 === 0) ? result + number : result;
console.log(numbers2.reduce(sumEven));

// Exercicio de fixação 3
const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 },
    ],
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { name: 'Matemática', nota: 59 },
      { name: 'Português', nota: 80 },
      { name: 'Química', nota: 78 },
      { name: 'Biologia', nota: 92 },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 76 },
      { name: 'Português', nota: 90 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 80 },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 91 },
      { name: 'Português', nota: 85 },
      { name: 'Química', nota: 92 },
      { name: 'Biologia', nota: 90 },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 70 },
      { name: 'Português', nota: 70 },
      { name: 'Química', nota: 60 },
      { name: 'Biologia', nota: 50 },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 80 },
      { name: 'Português', nota: 82 },
      { name: 'Química', nota: 79 },
      { name: 'Biologia', nota: 75 },
    ],
  },
];

const getStudentBestSubject = (element) => {
  const bestSubject = element.materias.reduce((bestSub, subject) => (subject.nota > bestSub.nota) ? subject : bestSub);
  return { name: element.nome, materia: bestSubject.name};
}

const getBestSubject = () => estudantes.map(getStudentBestSubject);

console.log(getBestSubject());
