let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log('Bem-vinda,', info.personagem);
console.log('---------------------------------------------------------');

info['recorrente'] = 'Sim';
console.log(info);
console.log('---------------------------------------------------------');

for (let key in info) {
    console.log(key);
}
console.log('---------------------------------------------------------');

for (let key in info) {
    console.log(info[key]);
}
console.log('---------------------------------------------------------');
console.log('---------------------------------------------------------');


let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christimas on Bear Mountain, Dell\'s Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
};

let infos = [info, info2];
for (let chave in info) {
    if (chave != 'recorrente') {
        console.log(info[chave] + ' e ' + info2[chave]);
    } else {
        if (info[chave] === info2[chave]) {
            console.log('Ambos são recorrentes');
        }
    }

}

// console.log(info.personagem + ' e ' + info2.personagem);
// console.log(info.origem + ' e ' + info2.origem);
// console.log(info.nota + ' e ' + info2.nota);

// if (info.recorrente === info2.recorrente) {
//     console.log('Ambos são recorrentes');

console.log('---------------------------------------------------------');
console.log('---------------------------------------------------------');


let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
        {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
        },
    ],
};

console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + leitor.livrosFavoritos[0].titulo + '.')
console.log('---------------------------------------------------------');

leitor.livrosFavoritos[1] = {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco'
}

console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos.')
