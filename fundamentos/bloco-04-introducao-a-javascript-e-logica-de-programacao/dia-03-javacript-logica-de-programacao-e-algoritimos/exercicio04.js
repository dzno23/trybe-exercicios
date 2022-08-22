let maiorPrimo = 0;

for (let index = 2; index <= 50; index += 1) {
    if (index % 2 != 0 && index % 3 != 0 && index % 5 != 0 && index % 7 != 0 && index % 9 != 0) {
        maiorPrimo = index;
    }
}

console.log('O maior conmero primo entre 2 e 50 é: ' + maiorPrimo + '.');
