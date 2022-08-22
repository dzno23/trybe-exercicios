let numeroFatorado = 10;
let fatoracao = numeroFatorado;
let multiplicador = numeroFatorado - 1;

for (let index = multiplicador; index > 0; index -= 1) {
    fatoracao = fatoracao * index;
}

console.log(fatoracao);