const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// escreva toObject abaixo

const toObject = (arrCar) => {
  const [ model, brand, year ] = arrCar;
  const obj = { model, brand, year };
  return obj;
}

console.log(toObject(palio));
console.log(toObject(shelbyCobra));
console.log(toObject(chiron));