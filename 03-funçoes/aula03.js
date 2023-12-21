
/*

function teste(){
    console.log('teste')
}

*/

/*
function falemeunome(name){
    console.log(`seu nome é ${name}`)
}

falemeunome('guilherme')

################

function increJuros(valor, percentualjuros){
    const valoracre = (percentualjuros / 100) * valor
    // valor de acrescimo
    return valor + valoracre
    // faz retornar o valor mais o acrecimo para o resultado da conta
}

console.log(increJuros(100,15))

*/

function cimc(){
    return peso / altu*altu

}

function classimc(imc){
    if (imc < 18.5){
        return('abaixo do peso')
    } else if ( imc >= 18.5 && imc <= 25){
        return('peso normal')
    } else if ( imc >= 25 && imc <= 30){
        return('saudavel')
    }else if ( imc >= 30 && imc <= 40){
        return('obeso')
    } else{
        return(' vai morrer gordão')
    }
}

let peso = 150
let altu = 1.72

let imc = cimc(peso, altu)
console.log(classimc(imc))


