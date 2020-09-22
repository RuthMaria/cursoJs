// 1. Crie uma função que dado o objeto a seguir: 
var endereco = {
    rua: 'Rua dos Pinheiros',
    numero: 1293,
    bairro: 'centro',
    cidade: 'São Paulo',
    Uf: 'SP'
}

/*Retorne o seguinte conteúdo:
O usuário mora em São Paulo / SP, no bairro Centro, na rua "Rua dos Pinheiros" comnº 1293. */

function dados(endereco) {
    console.log(`O usuário mora em ${endereco.cidade}/${endereco.Uf}, no bairro ${endereco.bairro}, na rua
            ${endereco.rua} , nº ${endereco.numero}`);
}

dados(endereco)

// 2. Crie uma função que dado um intervalo (entre x e y) exiba todos número pares

function pares(x, y) {

    for (var i = x; i <= y; i++) {
        if (i % 2 == 0) {
            console.log(`Par: ${i}`)
        }
    }
}

pares(1, 10)

/* 3. Escreva uma função que verifique se o vetor de habilidades passado possui a habilidade "Javascript" 
e retorna um booleano true/false caso exista ou não.*/ 

function temHabilidade(skills) {

    return (skills.indexOf(skills) != -1)
}

var skills = ['JavaScript', 'ReactJS', 'Reactive Native']
console.log(temHabilidade(skills[0]))

// Escreva uma função que dado um total de anos de estudo retorna o quão experiente o usuário é:

function experiencia(anos) {

    if (anos >= 0 && anos <= 1) {
        return 'Iniciante'

    } else if (anos > 1 && anos <= 3) {
        return 'Intermediário'

    } else if (anos > 3 && anos <= 6) {
        return 'Avançado'

    } else {
        return 'Jedi Master'
    }
}

console.log(experiencia(5))

// 5. Dado o seguinte vetor de objetos: 
var usuario = [
    {
        nome: 'Ruth',
        habilidade: ['JavaScript', 'ReactJS', 'Redux']
    },
    {
        nome: 'maria',
        habilidade: ['VueJS', 'Ruby on Rails', 'Elixir']
    }
]

/*Escreva uma função que produza o seguinte resultado:
O Diego possui as habilidades: Javascript, ReactJS, Redux
O Gabriel possui as habilidades: VueJS, Ruby on Rails, Elixir */

function habilidade(usuario) {

    for (var i in usuario) {
        console.log(`O ${usuario[i].nome} possui as habilidades: ${usuario[i].habilidade}`)
    }
}

habilidade(usuario)
