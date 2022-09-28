// Para fixar
// Vamos fazer uma salada de frutas com itens adicionais que você desejar.

// Faça uma função chamada fruitSalad passando como parâmetro specialFruit e additionalItens; faça a função retornar uma lista única, contendo todos os itens da nossa salada de frutas, usando o spread.

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['morango', 'uva', 'maçã'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['suco de limão', 'leite condensado', 'creme de leite'];

const fruitSalad = (fruit, additional) => {
  const myFruitSalad = [...fruit, ...additional];
  return myFruitSalad;
};

console.log(fruitSalad(specialFruit, additionalItens));