
/*
const aluno = ['joao', 'vitor', 'marina']

console.log(aluno[0])

aluno[4] = 'vinicius'

console.log(aluno)

aluno.push('guilherme') 
aluno.sort()
console.log(aluno)

*/


const notas = []

notas.push(7)
notas.push(5)
notas.push(7)
notas.push(8)

let soma = 0

for (let i = 0; i < notas.length; i++) {
    const notaa = notas[i];
    soma = soma + notaa
}   

let media = soma / notas.length
console.log(media)