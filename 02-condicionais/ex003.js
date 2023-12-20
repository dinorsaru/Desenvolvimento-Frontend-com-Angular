/*
verificador de media de aluno

media = (media 1 + media 2+ media 3) / 3

classificação:
 media menor que 5 : reprovado
 media entre 5 e 7 : recuperação
 media acima de 7 : aprovado
*/

let m1 = 8
let m2 = 10 
let m3 = 8

let mf = (m1+m2+m3)/3
console.log(mf)

if(mf < 5){
    console.log('reprovado')
} else if (mf >= 5 && mf <= 7) {
    console.log('recuperação')
} else {
    console.log('aprovado')
}
    


