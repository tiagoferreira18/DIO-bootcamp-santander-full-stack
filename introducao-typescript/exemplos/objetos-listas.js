"use strict";
const pessoa = {
    nome: "Mariana",
    idade: 20,
    profissao: 'desenvolvedora'
};
// Se tentar trocar a idade passando como string '21' não permitira, valida o tipo também dentro dos objetos.
pessoa.idade = 21;
//Objeto com a tipagem iniciada, deve seguir o tipo na declaração dos valores
const andre = {
    nome: 'Andre',
    idade: 25,
    profissao: 'Desenvolvedor'
};
const paula = {
    nome: 'Paula',
    idade: 25,
    profissao: 'Desenvolvedor'
};
//enum grupo de constantes
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissao[Profissao["JogadorDeFutebol"] = 3] = "JogadorDeFutebol";
})(Profissao || (Profissao = {}));
const vanessa = {
    nome: "Vanessa",
    idade: 23,
    profissao: Profissao.Atriz
};
const maria = {
    nome: "Maria",
    idade: 23,
    profissao: Profissao.Atriz
};
const jessica = {
    nome: 'Jessica',
    idade: 29,
    profissao: Profissao.JogadorDeFutebol,
    materias: ['Português', 'Matemática', 'Ed.Fisica']
};
const monica = {
    nome: 'Monica',
    idade: 29,
    materias: ['Português', 'Matemática', 'Ed.Fisica']
};
function listar(lista) {
    for (const item of lista) {
        console.log('- ', item);
    }
}
listar(monica.materias);
