
class pessoa{

    nome
    idade
    
    descrever(){
        console.log(`meu nome é ${this.nome} e minha idade é ${this.idade} anos de idade`)
    }
}

let vitor = new pessoa()
vitor.nome = 'vitor vitor'
vitor.idade = 25

let fui = new pessoa()
fui.nome = ' fui fui'
fui.idade= 10

vitor.descrever()

/*
const dados = {
    nome: 'gui',
    idade: 26,

    descrever: function(){
        console.log(`meu nome é ${nome} e minha idade é ${idade} de idade`)
    }
}*/