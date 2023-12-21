
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

*/

function increJuros(valor, percentualjuros){
    const valoracre = (percentualjuros / 100) * valor
    // valor de acrescimo
    return valor + valoracre
    // faz retornar o valor mais o acrecimo para o resultado da conta
}

console.log(increJuros(100,15))
