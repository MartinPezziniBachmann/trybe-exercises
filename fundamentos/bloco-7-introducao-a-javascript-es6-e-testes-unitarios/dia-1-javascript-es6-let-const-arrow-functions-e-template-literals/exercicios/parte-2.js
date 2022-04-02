// Exercício 1 - Criar função que retorna fatorial

// Função recurssiva - não chamar com o segundo parâmetro, que funciona para organizar a recurssividade
const retornaFatorial = (numero, soma = 1) => (numero < 2) ? soma : retornaFatorial(numero - 1, soma * numero);

console.log(retornaFatorial(3));

// Exercício 2 - Criar função que retorna a maior palavra

const longestWord = (frase) => {
  const arrayPalavras = frase.split(' ');
  let maiorPalavra = '';
  for (let index = 0; index < arrayPalavras.length; index += 1) {
    if (arrayPalavras[index].length > maiorPalavra.length){
      maiorPalavra = arrayPalavras[index];
    }
  }
  return maiorPalavra;
}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu')) // retorna 'aconteceu'

// Exercício 4 - Funções com strings

const arraySkills = ['Curiosidade', 'JavaScript', 'Lógica', 'HTML', 'Cuidado'];

const substituteCharX = string => 'Tryber x aqui!'.replace('x', string)

const concatArrayAndString = string => {
  arraySkills.sort();
  let newString = `${string} Minhas cinco principais habilidades são:`;
  for (let index = 0; index < arraySkills.length; index += 1) {
    newString = `${newString}
    * ${arraySkills[index]}`
  }
  return newString;
}

console.log(concatArrayAndString(substituteCharX('Martin')));
