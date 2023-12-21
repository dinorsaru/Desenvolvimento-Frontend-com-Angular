
const dados = {
    nome: 'gui',
    idade: 26,

    descrever: function(){
        console.log(`meu nome é ${nome} e minha idade é ${idade} de idade`)
    }
}

console.log(dados.nome)

// imprimir dados em formato chave e valor

// adicionando dados

dados.altura = 1.72

console.log(dados)

// deletar dados 

delete dados.altura

console.log(dados)