const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const verificarRespostas = (gabarito, respostas) => {
  let pontuacao = 0;
  for (let index = 0; index < gabarito.length; index += 1) {
    if (gabarito[index] === respostas[index]) {
      pontuacao += 1;
    } else if ('N.A' !== respostas[index]) {
      pontuacao -= 0.5;
    }
  }
  return pontuacao;
}

const gerarNota = (gabarito, respostas, verificador) => {
  return `Nota final: ${verificador(gabarito,respostas)}`;
}

console.log(gerarNota(RIGHT_ANSWERS, STUDENT_ANSWERS, verificarRespostas));