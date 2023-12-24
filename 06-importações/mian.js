

const {gets, print} = require('./funçoes-auxiliares')


//const numSort = []
let maiorValor = 0

for (let i = 0; i < 5; i++) {
    const numSort = gets();
    if (numSort > maiorValor){
        maiorValor = numSort
    }
}



/*for (let i = 0; i < numSort.length; i++) {
    const numSortf = numSort[i];
    if (numSortf > maiorValor){
        maiorValor = numSortf
    }
    
}*/

print(maiorValor)
/*const pessoa = {
    nome: 'gui'
}

const {nome} = pessoa*/