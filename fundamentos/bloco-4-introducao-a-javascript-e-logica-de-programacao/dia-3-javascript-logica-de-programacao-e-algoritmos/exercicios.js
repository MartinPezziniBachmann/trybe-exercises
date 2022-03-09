//Exercício 1 - Calcular fatorial de 10
let fatorial10 = 1;

for (let index = 2; index < 11; index += 1){
    fatorial10 = fatorial10 * index;
    console.log(fatorial10)
}

//Exercício 2 - Inverter uma palavra
let word = 'tryber';
let newWord = '';
for (let index = word.length; index > 0; index -= 1){
    newWord = newWord + word[index - 1];
    console.log(newWord);
}

//Exercício 3 - Maior e menor palavra do array
let array = ['java', 'javascript', 'python', 'html', 'css'];

let maiorPalavra = array[0];
let menorPalavra = array[0];
for(let index = 1; index < array.length; index += 1){
    if(maiorPalavra.length < array[index].length){
        maiorPalavra = array[index];
    }
    if(menorPalavra.length > array[index].length){
        menorPalavra = array[index];
    }
}

console.log("Maior palavra: " + maiorPalavra);
console.log("Menor palavra: " + menorPalavra);

//Exercício 4 - Maior número primo até 50
let maiorPrimo = 0;

for (let index = 1; index < 50; index += 2){
    let ehPrimo = true;
    for (let index2 = 3; index2 < index; index2 +=2){
        if (index % index2 === 0){
            ehPrimo = false;
        }
    }
    if (ehPrimo){
        maiorPrimo = index;
        console.log(maiorPrimo);
    }
}

//BÔNUS
//Exercício 1 - Imprime um quadrado de tamanho n

let n = 5;

let base = ''
for(let index = 0; index < n; index +=1){
    base += '*';
}
for(let index = 0; index < n; index +=1){
    console.log(base);
}

//Exercício 2 - Imprime um triangulo de tamanho n

base = ''
for(let index = 0; index < n; index +=1){
    base += '*';
    console.log(base);
}

//Exercício 3 - Imprime um triangulo invertido de tamanho n

base = ''
let espacos = '';

for(let index = 0; index < n; index +=1){
    espacos = '';
    base += '*';
    for(let index2 = 1; index2 < n - index; index2 +=1){
        espacos += ' ';
    }
    console.log(espacos + base);
}

//Exercício 4 - Imprime uma pirâmide de base n
base = '*'
espacos = '';

for(let index = 0; index < n; index +=2){
    for(let index2 = 1; index2 < n - index; index2 +=2){
        espacos += ' ';
    }
    console.log(espacos + base);
    espacos = '';
    base += '**';
}

//Exercício 5 - Imprime uma pirâmide vazia de base n
n = 7;
let linha = ''
console.log("Exercício 5")

//Calcula primeira linha
for(let index2 = 1; index2 < n; index2 += 2){
    linha += ' ';
}
linha += '*';
console.log(linha);

//Calcula linhas do meio
for(let index = 1; index < n-2; index +=2){
    linha = '';
    for(let index2 = 2; index2 < n - index; index2 += 2){
        linha += ' ';
    }
    linha += '*';
    for(let index3 = 0; index3 < index; index3 += 1){
        linha += ' ';
    }
    linha += '*';
    console.log(linha);
    linha = '';
}

//Calcula última linha
for(let index = 0; index < n; index +=1){
    linha += '*';
}
console.log(linha);

//Exercício 6 - Verifica se é primo
let numero = 8;
let ehPrimo = true;

for (let index = 2; index < numero; index +=1){
    if (numero % index === 0){
        ehPrimo = false;
    }
}

console.log(numero + " é primo? " + ehPrimo);