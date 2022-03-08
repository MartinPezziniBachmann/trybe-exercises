let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

let indexOfPortfolio = menu[2];

console.log(indexOfPortfolio);

menu.push("Contato");
console.log(menu);

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for(let indice = 0; indice < groceryList.length; indice += 1){
    console.log(groceryList[indice]);
}

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let indice of names){
    console.log(indice);
}