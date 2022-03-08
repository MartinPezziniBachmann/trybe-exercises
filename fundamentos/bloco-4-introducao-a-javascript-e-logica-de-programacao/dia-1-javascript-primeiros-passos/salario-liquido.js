const salarioBruto = 5000;

let salarioLiquido;

if (salarioBruto < 1556.95){
    salarioLiquido = salarioBruto - 0.08 * salarioBruto;
} else if (salarioBruto < 2594.92) {
    salarioLiquido = salarioBruto - 0.09 * salarioBruto;
} else if (salarioBruto < 5189.82) {
    salarioLiquido = salarioBruto - 0.11 * salarioBruto;
} else {
    salarioLiquido = salarioBruto - 570.88;
}

console.log(salarioLiquido);

if (salarioLiquido < 1903.99){

} else if (salarioLiquido < 2826.66){
    salarioLiquido = salarioLiquido - 0.075 * salarioLiquido + 142.8;
} else if (salarioLiquido < 3751.06){
    salarioLiquido = salarioLiquido - 0.15 * salarioLiquido + 354.8;
} else if (salarioLiquido < 4664.68){
    salarioLiquido = salarioLiquido - 0.225 * salarioLiquido + 636.13;
} else {
    salarioLiquido = salarioLiquido - 0.275 * salarioLiquido + 869.36;
}

console.log(salarioLiquido);