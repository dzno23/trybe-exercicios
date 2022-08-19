let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let number = numbers;

let number5 = [];

for (let cont = 0; cont < number.length; cont += 1) {
    if (cont < number.length - 1) {
        number5.push(number[cont] * number[cont + 1]);
    } else {
        number5.push(number[cont] * 2);
    }
    
}

console.log(number5);