let n = 5;
let a = ''

for (let indexColuna = 1; indexColuna <= n; indexColuna += 1) {
    for (let indexLinha = 1; indexLinha <= n; indexLinha += 1) {
        a += '*';
    }
    console.log(a);
    a = '';
}