/*
crie uma classe que re´resente carros
os carros possuem marca, cor, gasto medio de combustivel
criar metodo que dado a quantidade de km e o preço de o valor gasto
*/

class carro{
    
    marca
    cor
    gastoKM

    constructor(marca, cor, gastoKM){
        this.marca = marca
        this.cor = cor
        this.gastoKM = gastoKM
    }
    
    calcular(dist, pgas){
        return dist * this.gastoKM * pgas
    }
} 

const ford = new carro('ford', 'branco', 1/10)
const fiat = new carro('fiat', 'prata', 1/12)

console.log(ford)
console.log(fiat)


console.log(ford.calcular(100, 5.50)) 
console.log(fiat.calcular(70, 5.50))