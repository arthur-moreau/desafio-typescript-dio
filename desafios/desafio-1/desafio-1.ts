// Como podemos rodar isso em um arquivo .ts sem causar erros? 
// let funcionario = {};
// funcionario.codigo = 10;
// funcionario.nome = "John";

// Solução 1
let funcionario = {
    codigo: 10,
    nome: "John"
}
funcionario.codigo = 11;
funcionario.nome = "James";

console.log(funcionario)

// Solução 2

const funcionario2: {codigo: number, nome: string} = {
    codigo: 100,
    nome: "arthur"
}

// Solução 3

interface Funcionario {
    codigo: number
    nome: string
}

const eduardo: Funcionario = {
    codigo: 200,
    nome: "Eduardo"
}

// Solução 4

const andre = {} as Funcionario;
andre.codigo = 10;
andre.nome = "Andre"
