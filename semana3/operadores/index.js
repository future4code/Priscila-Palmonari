//Exercício de interpretação

/*1)
console.log("a. ", resultado)
false
console.log("b. ", resultado)
false
console.log("c. ", resultado)
true
console.log("e. ", typeof resultado)
boolean
*/

/*2)
console.log('a. ', array)
undefined
console.log('b. ', array)
null
console.log('c. ', array.length)
11
console.log('d. ', array[i])
mostra o 3 que quem esta na posição 0
console.log('e. ', array)
19 na posição 1
console.log('f. ', valor)
9
*/

// Exercício de escrita de código
/*1)
const idade = prompt("Qual sua idade?")
const idadeamigo = prompt("Qual a idade do seu melhor amigo?")

const maior = Number(idade) > Number(idadeamigo)
const diferenca = Number(idade) - Number(idadeamigo)
console.log("Sua idade é maior do que a da sua amiga?",maior)
console.log("A diferença de idade é: ",diferenca)*/

/*2)
const numPar = prompt("Insira um número par.")
const restoDiv = Number(numPar)%23

console.log("O resto da divisão é: ",restoDiv)
//todo número divido por 2 o resto é 0
//se o usuário inserir um número ímpar o programa mostra o resto */

/*3)
const listaDeTarefas = []
const tarefa1 = prompt("Qual a primeira tarefa que vc tem que fazer no seu dia??")
const tarefa2 = prompt("Qual a segunda tarefa que vc tem que fazer no seu dia??")
const tarefa3 = prompt("Qual a terceira tarefa que vc tem que fazer no seu dia??")

listaDeTarefas[0] = tarefa1
listaDeTarefas[1] = tarefa2
listaDeTarefas[2] = tarefa3
console.log(listaDeTarefas)

const tarefaRealizada = prompt("Qual tarefa vc ja realizou 0,1ou 2??")
console.log(tarefaRealizada)
listaDeTarefas.splice(Number(tarefaRealizada),1)
console.log(listaDeTarefas)*/

/*4)
const nome = prompt("Insira seu nome")
const email = prompt("Insira seu email") 

console.log("O email",email,"foi cadastrado com sucesso.Seja bem-vindo(a)",nome)*/


//Desafios
/*1)
const F = 77
const k = (F-32)*5/9+273.15
console.log(k)

const C = 80
const F = (C) * 9/5 + 32 
console.log(F)

const C = 30
const F = (C) * 9/5 + 32
const K = C + 273
console.log(F,K)

const C = prompt("Insira uma valor:")
const F = (Number(C)) * 9/5 + 32
const K = Number(C) + 273
console.log(F,K)*/


const consumo = 280
const quilowattHora = 280 * 0.05
const d = quilowattHora - (quilowattHora * 15/100)
const valorpago = quilowattHora - d
console.log("O valor do desconto é : ",valorpago)

/*3)
const lb = 20
const kg = lb * 0.454
console.log("O valor em Kg é:",kg)*/

/*const oz = 10.5
const kg = oz * 0.0283
console.log("O valor em Kg é: ",kg)*/

/*const mi = 100
const m = mi * 1609.34
console.log("O valor em m é: ",m)*/

/*const ft = 50
const m = ft * 0.3048
console.log("O valor em m é: ",m)*/

/*const gal = 103.56
const l = gal * 3.78541
console.log("O valor em m é: ",l)*/

/*const xic = 450
const l = xic * 0.24
console.log("O valor em m é: ",l)*/

/*const xic = prompt("Digite a quantidade de xícara: ")
const l = Number(xic) * 0.24
console.log("O valor em m é: ",l)*/

/*const ensino = prompt("Voce concluiu o ensino medio?")
const idade = Number(prompt("Qual sua idade?"))
const facul = prompt("Vc esta cursando outra facul?")

if ((ensino === 'sim') && (idade >=18) && (facul === 'nao')){
    console.log("Voce pode entrar na nossa facul")
}
else{
    console.log("Nem pode :/")
}*/







