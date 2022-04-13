// Exemplo 1
const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];
const [firstCountry, secondCountry, thirdCountry, fourthCountry] = arrayCountries;

console.log(firstCountry); // Brazil
console.log(secondCountry); // Japan
console.log(thirdCountry); // China
console.log(fourthCountry); // Canada

// Exercicio de fixação 1
const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); // Olá


// Produza o mesmo resultado acima, porém utilizando array destructuring

const [saudacao, printer] = saudacoes;
printer(saudacao);

// Exercicio de fixação 2
let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

[animal, bebida, comida] = [comida, animal, bebida];

console.log(comida, animal, bebida); // arroz gato água

// Exercicio de fixação 3
let numerosPares = [1, 3, 5, 6, 8, 10, 12];

console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo

[,,, ...numerosPares] = numerosPares;

console.log(numerosPares); // [6, 8, 10, 12];
