let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let contagemDeImpares = 0;

for (number of numbers) {
    if (number % 2 === 1) {
        contagemDeImpares += 1;
    }
}

if (contagemDeImpares === 0) {
    console.log('Nenhum valor ímpar encontrado.')
} else {
    console.log('Existem', contagemDeImpares, 'números ímpares na array number.')
}