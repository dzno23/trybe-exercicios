let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let indexA = 1; indexA < numbers.length; indexA += 1) {
    for (let indexB = 0; indexB < indexA; indexB += 1) {
        if (numbers[indexA] > numbers[indexB]) {
            let position = numbers[indexA];
            numbers[indexA] = numbers[indexB];
            numbers[indexB] = position;
        }
    }
}

console.log(numbers);



