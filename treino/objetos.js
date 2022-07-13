"use strict";
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professor"] = 0] = "Professor";
    Profissao[Profissao["Engenheiro"] = 1] = "Engenheiro";
    Profissao[Profissao["M\u00E9dico"] = 2] = "M\u00E9dico";
    Profissao[Profissao["Comerciante"] = 3] = "Comerciante";
})(Profissao || (Profissao = {}));
const arthur = {
    nome: 'Arthur',
    idade: 31,
    profissao: Profissao.Engenheiro,
    materias: ['Html e Css', 'Typescript', 'Git e Github']
};
function listar(lista) {
    for (const item of lista) {
        console.log('- ' + item);
    }
}
listar(arthur.materias);
