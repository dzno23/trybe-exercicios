let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let maiorNumero = numbers[0];

for (num of numbers) {
    if (num > maiorNumero) {
        maiorNumero = num;
    }
}

console.log('O maior núemro da array numbers é ' + maiorNumero + '.');