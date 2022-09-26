const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  return arr.some((i) => i === name);
};

console.log(hasName(names, 'Adriana'));