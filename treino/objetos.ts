interface Pessoa {
    nome: string
    idade: number
    profissao: Profissao
}

enum Profissao {
    Professor,
    Engenheiro,
    Médico,
    Comerciante
}

interface Estudante extends Pessoa {
    materias: string[]
}

const arthur: Estudante = {
    nome: 'Arthur',
    idade: 31,
    profissao: Profissao.Engenheiro,
    materias:['Html e Css', 'Typescript', 'Git e Github']
}

function listar(lista:string[]) {
    for (const item of lista) {
        console.log('- ' + item)
    }
}

listar(arthur.materias)