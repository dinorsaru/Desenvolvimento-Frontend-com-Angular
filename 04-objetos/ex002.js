

class pessoa{
    nome
    peso
    altura

    constructor(nome, peso, altura){
        this.nome = nome
        this.peso = peso
        this.altura = altura
    }

    imc(){
        return this.peso / (this.altura * this.altura)
    }

    clasimc(){
        let imc = this.imc()
        if (imc < 18.5){
            return ('abaixo do peso')
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
}

const gui = new pessoa ('Guilherme', 65, 1.72)

console.log(gui)
console.log(gui.imc(65, 1.72))
console.log(gui.clasimc())