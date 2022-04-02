// Exercício 1 - Alterar a função

const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}


// Exercício 2 - Criar função que ordena array

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.

const ordenaArrays = array => `Os números ${array.sort((a, b) => a - b)} se encontram ordenados de forma crescente!`;

// console.log(ordenaArrays(oddsAndEvens)); // será necessário alterar essa linha 😉