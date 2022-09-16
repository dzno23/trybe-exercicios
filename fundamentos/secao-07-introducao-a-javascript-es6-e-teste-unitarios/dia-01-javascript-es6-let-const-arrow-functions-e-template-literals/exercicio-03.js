const btnCliques = document.querySelector('button');
btnCliques.addEventListener('click', () => document.querySelector('h2').innerText = parseInt(document.querySelector('h2').innerText) + 1);