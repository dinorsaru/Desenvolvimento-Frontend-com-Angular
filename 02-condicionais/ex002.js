/*
calcular preço de viagem

variaveis
1- preço etanol
2- preço gasolina
3- tipo de gasolina no carro
4- gasto medio de combustivel 
5-distancia da viagem

*/

let pgas = 5.79
// valor alcool
let palc = 3.29
// valor gas
let kml = 10
// kilometro por litro
let dist = 100
// distancia do percurso
let comb = 'etanol'
// deveria ser um input


 
if(comb == 'etanol'){
    let valperc = dist / kml
    // gasto distancia por tipo de combustivel
    let valor = valperc * palc 
    // valor gasto
    console.log(valor.toFixed(2))
} else {
    let valperc = dist / kml
    let valor = valperc * pgas
    console.log(valor.toFixed(2))
}
