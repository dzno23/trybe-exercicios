// 1- Agora vamos trabalhar com algumas formas geométricas! Faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:

let n = 5;
let a = ''

for (let indexColuna = 1; indexColuna <= n; indexColuna += 1) {
    for (let indexLinha = 1; indexLinha <= n; indexLinha += 1) {
        a += '*';
    }
    console.log(a);
    a = '';
}