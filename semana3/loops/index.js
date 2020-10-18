//EX de Leitura

/*1)Enquanto o i for menor que 5 ele ir entrar no laço e somar o valor de i dentro da variavel
valor, quando o i for igual a 5 ele do laço e imprimi oq esta na variavel valor*/

/*2a)Será impresso os valores que são maior que 18
b)Teria que criar uma variavel no escopo global iniciando com a posição 0 do array*/

/*
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
for (let i = 0; i < array.length; i++ ){
        let elemento = array[i]
        console.log(elemento)   
}*/

/*
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
for (let i = 0; i < array.length; i++ ){
        let elemento = array[i]/10
        console.log(elemento)
}*/

/*
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
for (let i = 0; i < array.length; i++ ){
        if(array[i]%2 === 0 ){
            let elemento = array[i]
            console.log(elemento)

        }
}*/

/*
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let novo =[]
for (let i = 0; i < array.length; i++ ){
        if(array[i]%2 === 0 ){
            let elemento = array[i]
            novo.push(elemento)
            console.log(elemento)
            
             
        }  
}
console.log(novo)*/

/*const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
const arrayString = []
let texto = ""
let i = 0

for(let numero of array){
    texto = "O elemento do índex "+ i + " é " + numero
    arrayString.push(texto)
    i++
}
console.log(arrayString)*/

/*const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let maior = array[0]
let menor = array[0]

for (i = 0; i < array.length; i++) { 
    if (maior < array[i]){
        maior = array[i]
    }
    if (menor > array[i]){
        menor = array[i]  
    }
}
console.log('O maior num é: ',maior)
console.log('O menor num é: ',menor)*/
