let n = 5;
let a = '';
let contador = n;

for (let iLinha = 1; iLinha <= n; iLinha += 1) {
    for (iColuna = 1; iColuna <= contador; iColuna += 1) {
        if (iColuna < contador) {
            a += ' ';
        } else {
            a += '*';
        }
    }
    console.log(a);
    





}


