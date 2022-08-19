let pecaXadrez = 'peão';

switch(pecaXadrez) {
    case 'peão' || 'Peão':
        console.log('O peão se movimenta para frente (para se locomover no tabuleiro) e para a diagonal dianteira (para capturar uma peça adversária). O peão não salta por cima de nehuma peça. Seu movimento é de uma casa apenas, seja pra frente ou para diagonal dianteira, exceto em seu primeiro deslocamento, podendo se movimentar uma ou duas casas para frente.');
        break;

    case 'torre' || 'Torre':
        console.log('A torre se movimenta para frente e para o lado. Ela pode se movimentar quantas casas quiser se não for capturar nenhuma outra peça. Quando a torre captura uma peça adversária, ela precisa parar na posição que a peça adversária estava. A torra não salta por cima de nehuma peça.');
        break;
    
    default:
        console.log('Digite uma peça válida.')
}