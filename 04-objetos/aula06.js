
class pessoa{

    nome
    idade
    
    // como criar um default
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }

    descrever(){
        console.log(`meu nome é ${this.nome} e minha idade é ${this.idade} anos de idade`)
    }
}

/*let vitor = new pessoa('vitor', 25)

let fui = new pessoa('gui', 26)

console.log(vitor)*/

/* 

const dados = {
    nome: 'gui',
    idade: 26,

    descrever: function(){
        console.log(`meu nome é ${nome} e minha idade é ${idade} de idade`)
    }
}*/

function compararPessoas(p1, p2){
    if (p1.idade > p2.idade){
        console.log(`${p1.nome}é mais velha que ${p2.nome}`)
    } else if ( p2.idade > p1.idade){
        console.log(`${p2.nome} é mais velhor que ${p1.nome}`)
    } else {
        console.log(`${p1.nome} e ${p2.nome} possuem a mesma idade`)
    }
}

const vitor = new pessoa('vitor', 25)
const gui = new pessoa('gui', 26)

compararPessoas(vitor, gui)