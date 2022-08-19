let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbers2 = numbers;

numbers2.sort(function (a, b) {
    return a - b;
});

let menorNumero = numbers2[numbers2.length - 1];

for (let index = numbers2.length; index >= numbers2[0]; index -= 1) {
    if (index < menorNumero) {
        menorNumero = index;
    } 
}

console.log('O menor número da raay numbers é ' + menorNumero + '.');