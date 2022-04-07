// Crie uma função para ser utilizada como parâmetro na função newEmployees

const createEmployees = (namePar) => {
  const emailFormatted = `${namePar.replace(' ', '_').toLowerCase()}@trybe.com`;
  return {
    name: namePar,
    email: emailFormatted
  }
};

const newEmployees = (createFunction) => {
  const employees = {
    id1: createFunction('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: createFunction('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: createFunction('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees(createEmployees));