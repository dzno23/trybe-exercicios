function triangulo(angulo1, angulo2, angulo3) {
    if (typeof angulo1 && typeof angulo2 && typeof angulo3 != 'number') {
        console.log('Você digitou algo errado.')
    } else {
        if (angulo1 + angulo2 + angulo3 === 180) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}

triangulo(40, 40, 100);
