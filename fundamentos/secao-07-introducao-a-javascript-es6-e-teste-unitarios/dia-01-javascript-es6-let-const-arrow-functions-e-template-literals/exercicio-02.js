const biggestWord = (frase) => {
  let bWord = 0;
  let gWord = ''
  for (let index = 0; index < frase.split(' ').length; index += 1) {
    let word = frase.split(' ')[index];
    for (let index = 0; index < word.length; index += 1) {
      if (word.length > bWord) {
        bWord = word.length;
        gWord = word;
      }
    }
  }
  console.log(gWord);
}
biggestWord('Oi meu amor');