let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let maior = 0;
let impares = 0;
let menor = 100;

for(let indice = 0; indice < numbers.length; indice += 1){
    console.log(numbers[indice]);
    soma += numbers[indice];
    if (maior < numbers[indice]){
        maior = numbers[indice];
    }
    if (menor > numbers[indice]){
        menor = numbers[indice];
    }
    if (numbers[indice] % 2 !== 0){
        impares += 1;
    }
}

console.log("Soma: " + soma);

let mediaAritmetica = soma / numbers.length;

console.log("Média Aritmética: " + mediaAritmetica);

if (mediaAritmetica > 20) {
    console.log("Valor maior que 20");
} else {
    console.log("Valor menor ou igual a 20");
}

console.log("Maior número: " + maior);

if (impares === 0){
    console.log("Nenhum valor impar encontrado");
} else {
    console.log("Impares: " + impares);
}

console.log("Menor número: " + menor);

let arrayNumeros = [];
for (let indice = 0; indice < 25; indice += 1){
    arrayNumeros.push(indice+1);
    console.log(arrayNumeros[indice] / 2)
}
console.log(arrayNumeros);