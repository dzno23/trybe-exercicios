// Corretor automático de exame
// Crie uma HOF que receberá três parâmetros:
// O primeiro será um array de respostas corretas (soluções);
// O segundo será um array contendo as respostas fornecidas por uma pessoa estudante;
// O terceiro é uma função que compara os dois arrays e então dá uma pontuação baseada nos acertos. Para isso, essa função usará os seguintes critérios:
// Uma resposta correta adiciona 1 ponto à pontuação final;
// A ausência de uma resposta não altera a pontuação (quando for “N.A”);
// Uma resposta incorreta reduz a pontuação final em 0.5 ponto.
// Ao final, a HOF deve retornar o total de pontos obtidos através das respostas fornecidas pela pessoa estudante. Utilize os seguintes arrays:


// const rigthAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
// const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

// const checkScore = () => {
//   let score = 0;
//   for (let indexR = 0; indexR < rigthAnswers.length; indexR += 1) {
//     for (let indexS = 0; indexS < studentAnswers.length; indexS += 1) {
//       if (rigthAnswers[indexR] === studentAnswers[indexS]) {
//         score += 1;
//       } else if (rigthAnswers[indexR] !== studentAnswers[indexS] && studentAnswers !== 'N.A') {
//         score -= 0.5;  
//       }
//     }
//   }
//   return score;
// };

// const totalPoints = (rigthAnswers, studentAnswers, callback) => {
//   return callback();
// };

// console.log(totalPoints(rigthAnswers, studentAnswers, checkScore));