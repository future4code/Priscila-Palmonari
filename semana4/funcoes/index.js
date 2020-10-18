// Exercicio de Interpretação

/*
1a) Será impresso os valores 10 e 50
b) Nada seria impresso, pois teria que declarar uma varivel para guardar o valor nela e depois imprimir essas variaveis no console.log
*/

/*
2a) Será impresso Darvas e Caio
b) Será impresso Amanda e Caio */

/*
3a)-----
*/

/*
4a)
 
function Eu(){
    console.log("Eu sou a Priscila, tenho 31 anos, moro em Assis/SP e sou estudante!")
}
Eu()

4b)
function Eu(nome, idade, cidade, ehEstudante) {
    let mensagemSeEstudante = ""
    if (ehEstudante) {
        mensagemSeEstudante = "sou"
    } else {
        mensagemSeEstudante = "não sou"
    }

    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e ${mensagemSeEstudante} estudante.`)
}
Eu("Priscila",31,"Assis","")
*/

/*
5a)
function SomaNumeros(a,b){
    return a+b
}
const soma = SomaNumeros(10,10)
console.log(soma)

b)
function verificaNumeros(a,b){
    if (a>=b){
        return true
    }
    else {
    return false
    }
    
}
console.log(verificaNumeros(2,3))
*/

/*
6a)
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
function qtdElementos(a){
    
    return array.length
}
const qtd = qtdElementos()
console.log(qtd)

b)
function Par(a){
    if (a %2 === 0){
        return true
    }
    else{
        return false
    }

}
console.log(Par(127))

c)
function verificaPar(a){
    let qtdPares = 0
    for (numero of a) {
        if (numero % 2 === 0) {
            qtdPares += 1
        }
    }
    return qtdPares
}
console.log(verificaPar([2,4,6,7]))

d)
function verificaPar(a){
    let qtdPares = 0
    for (numero of a) {
        if (Par(numero)) {
            qtdPares += 1
        }
    }
    return qtdPares
}
console.log(verificaPar([2,4,6,7]))
*/