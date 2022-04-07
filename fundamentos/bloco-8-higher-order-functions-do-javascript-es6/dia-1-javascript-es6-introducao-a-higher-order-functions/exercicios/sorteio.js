// Criar uma HOF que faz um sorteio

const ehIgual = (numero1, numero2) => {
  return numero1 === numero2;
}

const sorteio = (numeroEscolhido, funcaoIgual) => {
 const numeroSorteado = Math.floor(Math.random() * 5) + 1; 
 return (funcaoIgual(numeroSorteado, numeroEscolhido)) ? 'Parabéns você ganhou' : 'Tente novamente';
}

console.log(sorteio(1, ehIgual));