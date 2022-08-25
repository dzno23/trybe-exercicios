let dicRomanos = {
   i: 1,
   v: 5,
   x: 10,
   l: 50,
   c: 100,
   d: 500,
   m: 1000 
};

function transformaRomanosEmDecimal(numeroRomano) {
    numeroRomano = numeroRomano.toLowerCase();
    const len = numeroRomano.length;
    let numeroDecimal = 0;

    for (let index = 0; index < len; index += 1) {
        if (numeroRomano[index] > numeroRomano[index + 1]) {
            numeroDecimal += dicRomanos[numeroRomano[index]];
        } else {
            numeroDecimal += dicRomanos[numeroRomano[index + 1]] - dicRomanos[numeroRomano[index + 1]];
        }
    }

    return numeroDecimal;
}

console.log(transformaRomanosEmDecimal('XIV'));