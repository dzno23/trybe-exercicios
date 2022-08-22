// 5 

//Crie um algoritmo que recebe a idade de Carolzita , Murilo e Baêta e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.

let idadeCarolzita = 5;
let idadeMurilo = 10;
let idadeBaeta = 1;

if (idadeCarolzita < idadeMurilo && idadeCarolzita < idadeBaeta) {
    console.log('Carolzita é a mais nova');
} else if (idadeMurilo < idadeCarolzita && idadeMurilo < idadeBaeta) {
    console.log('Murilo é a mais nova');
} else {
    console.log('Baeta é a mais nova');
}
