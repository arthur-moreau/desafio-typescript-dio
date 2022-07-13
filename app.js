"use strict";
// Como podemos melhorar o esse código usando TS? 
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Jogador"] = 0] = "Jogador";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Padeiro"] = 2] = "Padeiro";
    Profissao[Profissao["Enfermeira"] = 3] = "Enfermeira";
})(Profissao || (Profissao = {}));
let pessoa1 = {
    nome: "maria",
    idade: 29,
    profissao: Profissao.Atriz
};
let pessoa2 = {
    nome: "roberto",
    idade: 19,
    profissao: Profissao.Padeiro
};
let pessoa3 = {
    nome: "laura",
    idade: 32,
    profissao: Profissao.Atriz
};
let pessoa4 = {
    nome: "carlos",
    idade: 19,
    profissao: Profissao.Padeiro
};
