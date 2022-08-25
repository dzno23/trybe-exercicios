// 3- Agora inverta o lado do triângulo. Por exemplo:
// Copiar
// n = 5

//     *
//    **
//   ***
//  ****
// *****
// Atenção! Note que esse exercício é bem mais complexo que o anterior! Não basta, aqui, imprimir somente asteriscos. Você precisará de uma lógica para imprimir espaços também.


let n = 5;
let a = '';
let contador = n;

for (let coluna = 1; coluna <= n; coluna += 1) {
    for (let index = 1; index <= n; index += 1) {
        if (index < contador) {
            a += ' ';
        } else {
            a += '*';
        }
    }
    console.log(a);
    contador -= 1;
    a = '';
}


