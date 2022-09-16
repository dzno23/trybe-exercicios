const substituiaX = (nome) => {
  const frase = 'Tryber x aqui!';
  const fraseSeparada = frase.split(' ');
  for (let index = 0; index < fraseSeparada.length; index += 1) {
    if (fraseSeparada[index] === 'x') {
      fraseSeparada[index] = nome;
    }
  }
  return console.log(`${fraseSeparada.join(' ')}`);
}

const minhasSkills = (substituiaX) => {
  const skills = ['html', 'CSS', 'JavaScript'];
  let minhasSkills = `${substituiaX}
  Minhas três principais habilidades são:
  • ${skills[0]}
  • ${skills[1]}
  • ${skills[2]}`
  return minhasSkills;
}

minhasSkills(substituiaX('Thiago'));