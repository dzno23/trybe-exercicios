const valorCusto = 10;
const valorVenda = 20;
let valorCustoTtoal = (valorCusto + (valorCusto * 0.20));
let lucro = valorVenda - valorCustoTtoal;

if (valorCusto <= 0 && valorVenda <= 0 && valorCustoTtoal <= 0) {
    console.log('Erro! Você digitou algum dado inválido.')
} else {
    console.log(1000 * lucro);
}



