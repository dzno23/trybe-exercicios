// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
// n = 5

// *
// **
// ***
// ****
// *****


let n = 5;
let a = ''

for (let indexColuna = 1; indexColuna <= n; indexColuna += 1) {
    a += '*';
    console.log(a);
}
