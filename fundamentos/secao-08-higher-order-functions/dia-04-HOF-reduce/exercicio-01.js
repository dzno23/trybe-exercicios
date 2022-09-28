const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten(arr) {
  return arr.map((element) => element.reduce((acc, crr) => {
    return acc + crr;
  }, []))
}

console.log(flatten(arrays));