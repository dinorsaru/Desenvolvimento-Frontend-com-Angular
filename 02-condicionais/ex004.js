/*
calculo de IMC

formula peso / (altura * altura)

condiçoe:

18.5 abaixo do peso
18.5 e 25 peso normal
25 e 30 saudavel
30 e 40 obeso
40+ obesidade grave
*/

let peso = 150
let altu = 1.72

let imc = peso / (altu * altu)
console.log(imc.toFixed(1))

if (imc < 18.5){
    console.log('abaixo do peso')
} else if ( imc >= 18.5 && imc <= 25){
    console.log('peso normal')
} else if ( imc >= 25 && imc <= 30){
    console.log('saudavel')
}else if ( imc >= 30 && imc <= 40){
    console.log('obeso')
} else{
    console.log(' vai morrer gordão')
}