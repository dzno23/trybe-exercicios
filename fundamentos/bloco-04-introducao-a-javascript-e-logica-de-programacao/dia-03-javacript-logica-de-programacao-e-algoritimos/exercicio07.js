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


