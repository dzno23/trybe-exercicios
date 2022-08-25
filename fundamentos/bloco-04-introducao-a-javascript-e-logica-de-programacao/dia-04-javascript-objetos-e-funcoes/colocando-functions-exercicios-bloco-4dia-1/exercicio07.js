function porcentagemEmLetras(porcentagem) {
    if (porcentagem >= 90 && porcentagem <= 100) {
        porcentagem = 'A';
        console.log(porcentagem);
    } else if (porcentagem >= 80 && porcentagem < 90) {
        porcentagem = 'B';
        console.log(porcentagem);
    } else if (porcentagem >= 70 && porcentagem < 80) {
        porcentagem = 'C';
        console.log(porcentagem);
    } else if (porcentagem >= 60 && porcentagem < 70) {
        porcentagem = 'D';
        console.log(porcentagem);
    } else if (porcentagem >= 50 && porcentagem < 60) {
        porcentagem = 'E';
        console.log(porcentagem);
    } else if (porcentagem >= 0 && porcentagem < 50) {
        porcentagem = 'F';
        console.log(porcentagem);
    } else {
        console.log('Você digitou uma porcentagem inválida. Digite uma porcentagem entre 0 e 100.');
    }
}

porcentagemEmLetras(100);




