"use strict";
// Como podemos rodar isso em um arquivo .ts sem causar erros? 
// let funcionario = {};
// funcionario.codigo = 10;
// funcionario.nome = "John";
// Solução 1
let funcionario = {
    codigo: 10,
    nome: "John"
};
funcionario.codigo = 11;
funcionario.nome = "James";
console.log(funcionario);
// Solução 2
const funcionario2 = {
    codigo: 100,
    nome: "arthur"
};
const eduardo = {
    codigo: 200,
    nome: "Eduardo"
};
// Solução 4
const andre = {};
andre.codigo = 10;
andre.nome = "Andre";
