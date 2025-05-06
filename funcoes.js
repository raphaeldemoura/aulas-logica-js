// function saudacao(){
//     console.log("Bom Dia!")
// }

// arrow function com parâmetros

// const saudacao = (turno,nome = "Helo")=>{
// console.log(`${turno} ${nome}`)
// }

// saudacao( "Bom Dia","Leticya")
// saudacao ("Boa Noite")

// const soma = (x,y)=>{
//     return x+y
// }

const soma = (x, y) => x + y

const subtracao = (x, y) => x - y

const divisao = (x, y) => x / y

const mutiplicacao = (x, y) => x * y

// const resultadoDaSoma = soma(5,8,9)
// console.log(resultadoDaSoma)


//funcao retornando o cálculo de duas funções

// const calculo = (x,y,z,a)=>{
//     return soma(x,y) + mutiplicacao(z,a)
// }

// const resultadoDoCalculo = calculo(10,2,5,7)

// console.log("resultado do calculo" ,resultadoDoCalculo)

// retorna o valor de varias funções em um return dentro de um objeto

// const calculo = (x, y) => {
//     return {
//         soma: soma(x, y),
//         subtracao: subtracao(x, y),
//         mutiplicacao: mutiplicacao(x, y),
//         divisao: divisao(x, y)
//     }
// }

// const resultadoFinalDoCalculo = calculo(20, 10)

// console.log("resultado final", resultadoFinalDoCalculo)

//escopo global e local(de bloco ou função)

const escopoGlobal = "Escopo Global"

function chamaEscopo(){
    const escopoLocal = "Escopo Local"
    console.log(escopoGlobal)
}
console.log(escopoGlobal)