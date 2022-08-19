let angulo1 = 40, angulo2 = 40, angulo3 = 100;

if (typeof angulo1 && typeof angulo2 && typeof angulo3 != 'number') {
    console.log('Você digitou algo errado.')
} else {
    if (angulo1 + angulo2 + angulo3 === 180) {
        console.log(true);
    } else {
        console.log(false);
    }
}