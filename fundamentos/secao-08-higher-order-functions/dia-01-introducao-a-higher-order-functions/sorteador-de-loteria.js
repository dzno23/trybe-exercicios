const checkLottery = (number) => {
  const numberDraw = Math.floor(Math.random() * 5) + 1;
  console.log(`Número sorteado: ${numberDraw}`);
  if (number === numberDraw) {
    return true
  }
  return false
}

const drawResult = (callback) => {
  if (callback === true) {
    return 'Parabéns você ganhou!'
  }
  return 'Tente novamente';
}

console.log(drawResult(checkLottery(3)));