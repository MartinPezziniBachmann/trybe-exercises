const custo = 10;
const venda = 20;

if (custo < 0 || venda < 0){
    console.log("Valor invalido")
} else {
    let custoTotal = custo + 0.2 * custo;
    console.log(custoTotal);
    let lucro = - custoTotal + venda;
    console.log(lucro);
    console.log(lucro * 1000);
}