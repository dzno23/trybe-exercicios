function verifyPalindrome(palavra) {
    let palindromo = palavra.split('').reverse().join('');

    if (palavra === palindromo) {
        return true;
    }
    return false;
}

console.log(verifyPalindrome('arara'));

console.log('---------------------------------------------------------');
console.log('---------------------------------------------------------');

function retornaMaiorValor(array) {
    let maiorNumero = array[0];
    let indiceMaiorNumero = 0;

    for (let index = 0; index < array.length; index += 1) {
        if (array[index] > maiorNumero) {
            maiorNumero = array[index];
            indiceMaiorNumero = index; 
        }
    }
    return indiceMaiorNumero;
}

console.log(retornaMaiorValor([2, 3, 6, 7, 10, 1]));

console.log('---------------------------------------------------------');
console.log('---------------------------------------------------------');

function retornaMenorValor(array) {
    let menorNumero = array[0];
    let indiceMenorNumero = 0;

    for (let index = 0; index < array.length; index += 1) {
        if (array[index] < menorNumero) {
            menorNumero = array[index];
            indiceMenorNumero = index; 
        }
    }
    return indiceMenorNumero;
}

console.log(retornaMenorValor([2, 4, 6, 7, 10, 0, -3]));

console.log('---------------------------------------------------------');
console.log('---------------------------------------------------------');

function retornaMaiorString(array) {
    
    let maiorString = '';

    for (let index = 0; index < array.length; index += 1) {
        if (array[index].length > maiorString.length) {
            maiorString = array[index];
        }
    }
    return maiorString;
}

console.log(retornaMaiorString(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

console.log('---------------------------------------------------------');
console.log('---------------------------------------------------------');

function verificaFimDaPalavra(stringWord, stringEnding) {

    let saoIguais = false;

    for (let indexE = stringEnding.length - 1; indexE >= 0; indexE -= 1) {
        for (let indexW = stringEnding.length - 1; indexW >= indexE.length; indexW -= 1) {
            if (stringEnding[indexE] === stringWord[indexW]) {
                saoIguais = true;
            } else {
                saoIguais = false;
            }
        }
    }

    return saoIguais;
}

console.log(verificaFimDaPalavra('trybe', 'be'));