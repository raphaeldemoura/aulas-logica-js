// function saudação(){
//     console.log("Bom dia!")
// }

//Arrow function com parâmetros

// const saudação = (turno,nome="João")=>{
//     console.log (`Boa noite ${turno} ${nome}`)
// }

// saudação("Bom dia","Raphael")
// saudação("Boa Noite")

  const soma = (x,y)=> x+y
  const subtracao = (x,y)=> x-y
  const multiplicacao = (x,y)=> x*y
  const divisao = (x,y)=> x/y

//  const resultadoDaSoma = soma(5,7)

//  console.log(resultadoDaSoma)

// função retornanfo o calculo de duas funções
// const calculo = (x,y,z,a)=>{
//     return soma(x,y) + multiplicacao(z,a)
// }

// const resultadoDoCalculo = calculo(10,2,5,7)

// console.log("resultadoDoCalculo",resultadoDoCalculo)

// retornar o valor de várias funções em um return dentro de um objeto

// const calculo = (x,y)=>{
//   return {
//     soma: soma(x,y),
//     subtracao: subtracao(x,y),
//     multiplicacao: multiplicacao(x,y),
//     divisao: divisao(x,y)
//   }
// }

// const resultadoDoCalculo = calculo(20,10)

// console.log("resultado final" ,resultadoDoCalculo)

//escopo global e local (de bloco da função)
 const escopoGlobal = "Escopo global"

 function chamaEscopo(){
  const escopoLocal = "Escopo Local"
  console.log("escopo local" ,escopoGlobal)
 }

console.log(escopoGlobal)