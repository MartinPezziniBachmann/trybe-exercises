// Crie uma função que receba três parâmetros e adicione uma nova chave ao objeto
const addNewKey = (objectPar, keyPar, valuePar) => {
  objectPar[keyPar] = valuePar;
}

const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

console.log(customer);

addNewKey(customer, 'lastName', 'Ferreira');

console.log(customer);
