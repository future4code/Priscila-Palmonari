/*
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Bem vind@ ao jogo BLACKJACK")

if(confirm("Quer começar o jogo???")) {
   let carta1Usuario = comprarCarta()
   let carta2Usuario = comprarCarta()
   let carta1Computador = comprarCarta()
   let carta2Computador = comprarCarta()
   
   

   
    let pontuacaoUsuario = carta1Usuario.valor + carta2Usuario.valor
    let pontuacaoComputador = carta1Computador.valor + carta2Computador.valor
    
    console.log("Usuarios - cartas:",carta1Usuario.texto ,carta2Usuario.texto," - ", "pontuação: ",pontuacaoUsuario)
    console.log("Computador - cartas:",carta1Computador.texto ,carta2Computador.texto," - ", "pontuação: ",pontuacaoComputador)
    
   if(carta1Usuario.texto[0] === "A" && carta2Usuario.texto[0] === "A"){
      console.log("VC USUARIO tirou nas 2 cartas o A, vai embaralhar DNV!!")
      carta1Usuario = comprarCarta()
      carta2Usuario = comprarCarta()
      console.log("Usuarios - cartas:",carta1Usuario.texto ,carta2Usuario.texto," - ", "pontuação: ",pontuacaoUsuario)
      console.log("Computador - cartas:",carta1Computador.texto ,carta2Computador.texto," - ", "pontuação: ",pontuacaoComputador)

      if(pontuacaoUsuario > pontuacaoComputador){
         console.log("USUÁRIO VENCEU!!")
      }
      else if(pontuacaoUsuario < pontuacaoComputador){
         console.log("COMPUTADOR VENCEU!!")
      }
      else if(pontuacaoUsuario === pontuacaoComputador){
         console.log("DEU EMPATE!!!")
      }

   }
   else if(carta1Computador.texto[0] == "A" && carta2Computador.texto[0] == "A"){
      console.log("VC COMPUTADOR tirou nas 2 cartas o As, vai embaralhar DNV!!")
      carta1Computador = comprarCarta()
      carta2Computador = comprarCarta()
      console.log("Usuarios - cartas:",carta1Usuario.texto ,carta2Usuario.texto," - ", "pontuação: ",pontuacaoUsuario)
      console.log("Computador - cartas:",carta1Computador.texto ,carta2Computador.texto," - ", "pontuação: ",pontuacaoComputador)

      if(pontuacaoUsuario > pontuacaoComputador){
         console.log("USUÁRIO VENCEU!!")
      }
      else if(pontuacaoUsuario < pontuacaoComputador){
         console.log("COMPUTADOR VENCEU!!")
      }
      else if(pontuacaoUsuario === pontuacaoComputador){
         console.log("DEU EMPATE!!!")
      }
   }
   
   else if(pontuacaoUsuario > pontuacaoComputador){
      console.log("USUÁRIO VENCEU!!")
   }

   else if(pontuacaoUsuario < pontuacaoComputador){
      console.log("COMPUTADOR VENCEU!!")
   }

   else if(pontuacaoUsuario === pontuacaoComputador){
      console.log("DEU EMPATE!!!")
   }
   
} 
else {
   console.log("O jogo acabou")
}
   