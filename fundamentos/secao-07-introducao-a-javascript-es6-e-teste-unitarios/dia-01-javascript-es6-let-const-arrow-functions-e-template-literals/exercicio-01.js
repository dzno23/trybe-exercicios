const factorial = (number) => `O fatorial de ${number} é ${number > 0 ? number * factorial(number - 1) : 'impossível de calcular'}.`
console.log(factorial(12));