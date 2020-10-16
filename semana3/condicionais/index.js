/*1) o programa verifica se o resto da divisão por 2 do número que foi digitado é 0 ou seja se ele é PAR se ele for
aparece a msg PASSOU NO TESTE, caso contrário ele é ímpar e aparece a msg NAO PASSOU NO TESTE*/

/*2a) Serve para mostrar o preço da fruta que foi digitado
b) Será impresso O PREÇO DA FRUTA MAÇÃ É R$2.25
c)Seria impresso o valor de R$5 pq o BREAK faz que a execução saia do bloco, não tendo BREAK a variavel
preco recebe o valor de 5.5 porém logo depois ela recebe o valor de 5 e termina a execução*/

/*3a) Esta recebendo um valor string já convertido para NUMBER
b) Primeiro que não vai rodar pq a variavel mensagem existe apenas dentro do bloco do if e ela foi chamada fora do if,pra funcionar
ela teria que ser declarada dentro do escopo global.
Ai sim,se o usuário digitar o valor 10 entra na condição e imprime a msg ESSE NÚMERO PASSOU NO TESTE, se digitar
-10 sai da condição e imprime ESSA MENSAGEM É SECRETA
c)respondido na b*/


/*4)
const idade = Number(prompt("Digite sua idade: "))

if (idade >= 18){
  console.log("Vc pode dirigir!!")
}
else{
  console.log("Nem pode!!")
}*/

/*5)
const turno = prompt("Digite M para Matutino, V para Vespertino ou N para Noturno")

if(turno === 'M'){
  console.log("Bom dia!")
}
else if(turno === 'V'){
  console.log("Boa tarde!")
}
else if(turno === 'N'){
  console.log("Boa noite!")
}*/

/*6)
const turno = prompt("Digite M para Matutino, V para Vespertino ou N para Noturno")

switch(turno){
 case 'M':
  console.log("Bom dia!")
  break
 case 'V':
  console.log("Boa tarde!")
  break
 case 'N':
  console.log("Boa noite!")
  break
}*/

/*7)
const genero = prompt("Qual genero de filme vaia assistir??: ")
const preco = Number(prompt("Qual o preço do ingresso??: "))

if((genero === 'Fantasia') && (preco < 15)){
  console.log("Bom filme!!")
}
else{
  console.log("Escola outro filme")
}*/


// DESAFIOS
/*1)
const genero = prompt("Qual genero de filme vaia assistir??: ")
const preco = Number(prompt("Qual o preço do ingresso??: "))
const snack = prompt("Qual snack vc vai comprar")

if((genero === 'Fantasia') && (preco < 15)){
  console.log("Bom filme,com",snack)
}
else{
  console.log("Escola outro filme")
}*/

/*2)
const nomeCompleto = prompt("Digite seu nome completo: ")
const tipoJogo = prompt("Digite o tipo de jogo IN para internacional e DO para doméstico: ")
const etapa = prompt("Digite a etapa SF Semi-final;DT decisao do terciro lugar e FI Fianl")
const categoria = Number(prompt("Qual a categoria?? 1,2,3 ou 4?"))
const qtdIngresso = Number(prompt("Digite a quantidade de ingressos"))
let valorIngresso

switch (categoria) {
  case 1:
    if((tipoJogo === 'Doméstico') && (etapa === 'SF')){
      const valorIngressoDO = 1320
      valorIngresso = qtdIngresso * valorIngressoDO
    
      console.log("Nome Completo: ",nomeCompleto)
      console.log("Tipo de jogo: ",tipoJogo)
      console.log("Etapa do jogo: ",etapa)
      console.log("Categoria: ",categoria)
      console.log("Qtd de ingressos: ",qtdIngresso)
      console.log("Valor do ingresso: ",valorIngressoDO)
      console.log("Valor total: ",valorIngresso)
    }
    if((tipoJogo === 'Doméstico') && (etapa === 'DT')){
      const valorIngressoDO = 660
      valorIngresso = qtdIngresso * valorIngressoDO
    
      console.log("Nome Completo: ",nomeCompleto)
      console.log("Tipo de jogo: ",tipoJogo)
      console.log("Etapa do jogo: ",etapa)
      console.log("Categoria: ",categoria)
      console.log("Qtd de ingressos: ",qtdIngresso)
      console.log("Valor do ingresso: ",valorIngressoDO)
      console.log("Valor total: ",valorIngresso)
    }
    if((tipoJogo === 'Doméstico') && (etapa === 'FI')){
      const valorIngressoDO = 1980
      valorIngresso = qtdIngresso * valorIngressoDO
    
      console.log("Nome Completo: ",nomeCompleto)
      console.log("Tipo de jogo: ",tipoJogo)
      console.log("Etapa do jogo: ",etapa)
      console.log("Categoria: ",categoria)
      console.log("Qtd de ingressos: ",qtdIngresso)
      console.log("Valor do ingresso: ",valorIngressoDO)
      console.log("Valor total: ",valorIngresso)
    }
    if((tipoJogo === 'Internacional') && (etapa === 'SF')){
      const valorIngressoDO = 5412
      valorIngresso = qtdIngresso * valorIngressoDO
    
      console.log("Nome Completo: ",nomeCompleto)
      console.log("Tipo de jogo: ",tipoJogo)
      console.log("Etapa do jogo: ",etapa)
      console.log("Categoria: ",categoria)
      console.log("Qtd de ingressos: ",qtdIngresso)
      console.log("Valor do ingresso: ",valorIngressoDO)
      console.log("Valor total: ",valorIngresso)
    }
    if((tipoJogo === 'Internacional') && (etapa === 'DT')){
      const valorIngressoDO = 2706
      valorIngresso = qtdIngresso * valorIngressoDO
    
      console.log("Nome Completo: ",nomeCompleto)
      console.log("Tipo de jogo: ",tipoJogo)
      console.log("Etapa do jogo: ",etapa)
      console.log("Categoria: ",categoria)
      console.log("Qtd de ingressos: ",qtdIngresso)
      console.log("Valor do ingresso: ",valorIngressoDO)
      console.log("Valor total: ",valorIngresso)
    }
    if((tipoJogo === 'Internacional') && (etapa === 'FI')){
      const valorIngressoDO = 8118
      valorIngresso = qtdIngresso * valorIngressoDO
    
      console.log("Nome Completo: ",nomeCompleto)
      console.log("Tipo de jogo: ",tipoJogo)
      console.log("Etapa do jogo: ",etapa)
      console.log("Categoria: ",categoria)
      console.log("Qtd de ingressos: ",qtdIngresso)
      console.log("Valor do ingresso: ",valorIngressoDO)
      console.log("Valor total: ",valorIngresso)
    }
    break;
  case 2:
      if((tipoJogo === 'Doméstico') && (etapa === 'SF')){
        const valorIngressoDO = 880
        valorIngresso = qtdIngresso * valorIngressoDO
      
        console.log("Nome Completo: ",nomeCompleto)
        console.log("Tipo de jogo: ",tipoJogo)
        console.log("Etapa do jogo: ",etapa)
        console.log("Categoria: ",categoria)
        console.log("Qtd de ingressos: ",qtdIngresso)
        console.log("Valor do ingresso: ",valorIngressoDO)
        console.log("Valor total: ",valorIngresso)
      }
      if((tipoJogo === 'Doméstico') && (etapa === 'DT')){
        const valorIngressoDO = 440
        valorIngresso = qtdIngresso * valorIngressoDO
      
        console.log("Nome Completo: ",nomeCompleto)
        console.log("Tipo de jogo: ",tipoJogo)
        console.log("Etapa do jogo: ",etapa)
        console.log("Categoria: ",categoria)
        console.log("Qtd de ingressos: ",qtdIngresso)
        console.log("Valor do ingresso: ",valorIngressoDO)
        console.log("Valor total: ",valorIngresso)
      }
      if((tipoJogo === 'Doméstico') && (etapa === 'FI')){
        const valorIngressoDO = 1320
        valorIngresso = qtdIngresso * valorIngressoDO
      
        console.log("Nome Completo: ",nomeCompleto)
        console.log("Tipo de jogo: ",tipoJogo)
        console.log("Etapa do jogo: ",etapa)
        console.log("Categoria: ",categoria)
        console.log("Qtd de ingressos: ",qtdIngresso)
        console.log("Valor do ingresso: ",valorIngressoDO)
        console.log("Valor total: ",valorIngresso)
      }
      if((tipoJogo === 'Internacional') && (etapa === 'SF')){
        const valorIngressoDO = 3608
        valorIngresso = qtdIngresso * valorIngressoDO
      
        console.log("Nome Completo: ",nomeCompleto)
        console.log("Tipo de jogo: ",tipoJogo)
        console.log("Etapa do jogo: ",etapa)
        console.log("Categoria: ",categoria)
        console.log("Qtd de ingressos: ",qtdIngresso)
        console.log("Valor do ingresso: ",valorIngressoDO)
        console.log("Valor total: ",valorIngresso)
      }
      if((tipoJogo === 'Internacional') && (etapa === 'DT')){
        const valorIngressoDO = 1804
        valorIngresso = qtdIngresso * valorIngressoDO
      
        console.log("Nome Completo: ",nomeCompleto)
        console.log("Tipo de jogo: ",tipoJogo)
        console.log("Etapa do jogo: ",etapa)
        console.log("Categoria: ",categoria)
        console.log("Qtd de ingressos: ",qtdIngresso)
        console.log("Valor do ingresso: ",valorIngressoDO)
        console.log("Valor total: ",valorIngresso)
      }
      if((tipoJogo === 'Internacional') && (etapa === 'FI')){
        const valorIngressoDO = 5412
        valorIngresso = qtdIngresso * valorIngressoDO
      
        console.log("Nome Completo: ",nomeCompleto)
        console.log("Tipo de jogo: ",tipoJogo)
        console.log("Etapa do jogo: ",etapa)
        console.log("Categoria: ",categoria)
        console.log("Qtd de ingressos: ",qtdIngresso)
        console.log("Valor do ingresso: ",valorIngressoDO)
        console.log("Valor total: ",valorIngresso)
      }
      break;
  case 3:
      if((tipoJogo === 'Doméstico') && (etapa === 'SF')){
        const valorIngressoDO = 550
        valorIngresso = qtdIngresso * valorIngressoDO
      
        console.log("Nome Completo: ",nomeCompleto)
        console.log("Tipo de jogo: ",tipoJogo)
        console.log("Etapa do jogo: ",etapa)
        console.log("Categoria: ",categoria)
        console.log("Qtd de ingressos: ",qtdIngresso)
        console.log("Valor do ingresso: ",valorIngressoDO)
        console.log("Valor total: ",valorIngresso)
      }
      if((tipoJogo === 'Doméstico') && (etapa === 'DT')){
        const valorIngressoDO = 330
        valorIngresso = qtdIngresso * valorIngressoDO
      
        console.log("Nome Completo: ",nomeCompleto)
        console.log("Tipo de jogo: ",tipoJogo)
        console.log("Etapa do jogo: ",etapa)
        console.log("Categoria: ",categoria)
        console.log("Qtd de ingressos: ",qtdIngresso)
        console.log("Valor do ingresso: ",valorIngressoDO)
        console.log("Valor total: ",valorIngresso)
      }
      if((tipoJogo === 'Doméstico') && (etapa === 'FI')){
        const valorIngressoDO = 880
        valorIngresso = qtdIngresso * valorIngressoDO
      
        console.log("Nome Completo: ",nomeCompleto)
        console.log("Tipo de jogo: ",tipoJogo)
        console.log("Etapa do jogo: ",etapa)
        console.log("Categoria: ",categoria)
        console.log("Qtd de ingressos: ",qtdIngresso)
        console.log("Valor do ingresso: ",valorIngressoDO)
        console.log("Valor total: ",valorIngresso)
      }
      if((tipoJogo === 'Internacional') && (etapa === 'SF')){
        const valorIngressoDO = 2255
        valorIngresso = qtdIngresso * valorIngressoDO
      
        console.log("Nome Completo: ",nomeCompleto)
        console.log("Tipo de jogo: ",tipoJogo)
        console.log("Etapa do jogo: ",etapa)
        console.log("Categoria: ",categoria)
        console.log("Qtd de ingressos: ",qtdIngresso)
        console.log("Valor do ingresso: ",valorIngressoDO)
        console.log("Valor total: ",valorIngresso)
      }
      if((tipoJogo === 'Internacional') && (etapa === 'DT')){
        const valorIngressoDO = 1353
        valorIngresso = qtdIngresso * valorIngressoDO
      
        console.log("Nome Completo: ",nomeCompleto)
        console.log("Tipo de jogo: ",tipoJogo)
        console.log("Etapa do jogo: ",etapa)
        console.log("Categoria: ",categoria)
        console.log("Qtd de ingressos: ",qtdIngresso)
        console.log("Valor do ingresso: ",valorIngressoDO)
        console.log("Valor total: ",valorIngresso)
      }
      if((tipoJogo === 'Internacional') && (etapa === 'FI')){
        const valorIngressoDO = 3608
        valorIngresso = qtdIngresso * valorIngressoDO
      
        console.log("Nome Completo: ",nomeCompleto)
        console.log("Tipo de jogo: ",tipoJogo)
        console.log("Etapa do jogo: ",etapa)
        console.log("Categoria: ",categoria)
        console.log("Qtd de ingressos: ",qtdIngresso)
        console.log("Valor do ingresso: ",valorIngressoDO)
        console.log("Valor total: ",valorIngresso)
      }
      break;
  case 4:
    if((tipoJogo === 'Doméstico') && (etapa === 'SF')){
      const valorIngressoDO = 220
      valorIngresso = qtdIngresso * valorIngressoDO
    
      console.log("Nome Completo: ",nomeCompleto)
      console.log("Tipo de jogo: ",tipoJogo)
      console.log("Etapa do jogo: ",etapa)
      console.log("Categoria: ",categoria)
      console.log("Qtd de ingressos: ",qtdIngresso)
      console.log("Valor do ingresso: ",valorIngressoDO)
      console.log("Valor total: ",valorIngresso)
    }
    if((tipoJogo === 'Doméstico') && (etapa === 'DT')){
      const valorIngressoDO = 170
      valorIngresso = qtdIngresso * valorIngressoDO
    
      console.log("Nome Completo: ",nomeCompleto)
      console.log("Tipo de jogo: ",tipoJogo)
      console.log("Etapa do jogo: ",etapa)
      console.log("Categoria: ",categoria)
      console.log("Qtd de ingressos: ",qtdIngresso)
      console.log("Valor do ingresso: ",valorIngressoDO)
      console.log("Valor total: ",valorIngresso)
    }
    if((tipoJogo === 'Doméstico') && (etapa === 'FI')){
      const valorIngressoDO = 330
      valorIngresso = qtdIngresso * valorIngressoDO
    
      console.log("Nome Completo: ",nomeCompleto)
      console.log("Tipo de jogo: ",tipoJogo)
      console.log("Etapa do jogo: ",etapa)
      console.log("Categoria: ",categoria)
      console.log("Qtd de ingressos: ",qtdIngresso)
      console.log("Valor do ingresso: ",valorIngressoDO)
      console.log("Valor total: ",valorIngresso)
    }
    if((tipoJogo === 'Internacional') && (etapa === 'SF')){
      const valorIngressoDO = 902
      valorIngresso = qtdIngresso * valorIngressoDO
    
      console.log("Nome Completo: ",nomeCompleto)
      console.log("Tipo de jogo: ",tipoJogo)
      console.log("Etapa do jogo: ",etapa)
      console.log("Categoria: ",categoria)
      console.log("Qtd de ingressos: ",qtdIngresso)
      console.log("Valor do ingresso: ",valorIngressoDO)
      console.log("Valor total: ",valorIngresso)
    }
    if((tipoJogo === 'Internacional') && (etapa === 'DT')){
      const valorIngressoDO = 697
      valorIngresso = qtdIngresso * valorIngressoDO
    
      console.log("Nome Completo: ",nomeCompleto)
      console.log("Tipo de jogo: ",tipoJogo)
      console.log("Etapa do jogo: ",etapa)
      console.log("Categoria: ",categoria)
      console.log("Qtd de ingressos: ",qtdIngresso)
      console.log("Valor do ingresso: ",valorIngressoDO)
      console.log("Valor total: ",valorIngresso)
    }
    if((tipoJogo === 'Internacional') && (etapa === 'FI')){
      const valorIngressoDO = 1353
      valorIngresso = qtdIngresso * valorIngressoDO
    
      console.log("Nome Completo: ",nomeCompleto)
      console.log("Tipo de jogo: ",tipoJogo)
      console.log("Etapa do jogo: ",etapa)
      console.log("Categoria: ",categoria)
      console.log("Qtd de ingressos: ",qtdIngresso)
      console.log("Valor do ingresso: ",valorIngressoDO)
      console.log("Valor total: ",valorIngresso)
    }
    break;

    default:
    console.log("Essa categoria nao existe")
    break;
}*/


/*if((tipoJogo === 'Doméstico') && (categoria === 1) && (etapa === 'SF')){
  const valorIngressoDO = 1320
  valorIngresso = qtdIngresso * valorIngressoDO

  console.log("Nome Completo: ",nomeCompleto)
  console.log("Tipo de jogo: ",tipoJogo)
  console.log("Etapa do jogo: ",etapa)
  console.log("Categoria: ",categoria)
  console.log("Qtd de ingressos: ",qtdIngresso)
  console.log("Valor do ingresso: ",valorIngressoDO)
  console.log("Valor total: ",valorIngresso)
}
else if ((tipoJogo === 'Doméstico') && (categoria === 2) && (etapa === 'SF')){
  const valorIngressoDO = 880
  valorIngresso = qtdIngresso * valorIngressoDO

  console.log("Nome Completo: ",nomeCompleto)
  console.log("Tipo de jogo: ",tipoJogo)
  console.log("Etapa do jogo: ",etapa)
  console.log("Categoria: ",categoria)
  console.log("Qtd de ingressos: ",qtdIngresso)
  console.log("Valor do ingresso: ",valorIngressoDO)
  console.log("Valor total: ",valorIngresso)
}
else if ((tipoJogo === 'Doméstico') && (categoria === 3) && (etapa === 'SF')){
  const valorIngressoDO = 550
  valorIngresso = qtdIngresso * valorIngressoDO

  console.log("Nome Completo: ",nomeCompleto)
  console.log("Tipo de jogo: ",tipoJogo)
  console.log("Etapa do jogo: ",etapa)
  console.log("Categoria: ",categoria)
  console.log("Qtd de ingressos: ",qtdIngresso)
  console.log("Valor do ingresso: ",valorIngressoDO)
  console.log("Valor total: ",valorIngresso)
}
else if ((tipoJogo === 'Doméstico') && (categoria === 4) && (etapa === 'SF')){
  const valorIngressoDO = 220
  valorIngresso = qtdIngresso * valorIngressoDO

  console.log("Nome Completo: ",nomeCompleto)
  console.log("Tipo de jogo: ",tipoJogo)
  console.log("Etapa do jogo: ",etapa)
  console.log("Categoria: ",categoria)
  console.log("Qtd de ingressos: ",qtdIngresso)
  console.log("Valor do ingresso: ",valorIngressoDO)
  console.log("Valor total: ",valorIngresso)
}*/

/*let array =  [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

for( i = 0; array[i] <=14; i++){
  console.log(array)
}*/

/*let array =  [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
array.push(16)
console.log(array)*/

/*let array =  ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15']
console.log(array)*/

/*let i = 0
while(i < 10){
  console.log(i)
  i++
}*/
