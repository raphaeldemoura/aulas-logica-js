// let num = 10
// num = num + 5
// num += 5

//imprime múltiplos de 5 de 0 a 100,excluindo o 0

// for (let i = 0; i <= 100; i += 5) {
//     if (i > 0) {
//         console.log(i)
//     }
// }


//soma se os dois valores for maior que 10

// function somaSeMaiorQue10(a,b){
//     if(a>10 && b>10){
//         return a+ b
//     } else{
//         return "Números insuficientes"
//     }
// }

// console.log(somaSeMaiorQue10(8,20))

// função para calcular média

// function verificaMedia(notas){
//     let soma = 0;
//     for(let i = 0 ; i < notas.length ; i++){
//         soma += notas[i]
//     }
//     const media = soma / notas.length
//     return media >= 7 ? "Aprovado" : "Reprovado"
// }

// console.log(verificaMedia([8,8,8,8]))

// let vogais = ["a", "e" , "i", "o", "u"]
// let verificaVogalEmArray = vogais.includes("a")

// console.log(verificaVogalEmArray)

// let palavra = "Texto"
// let palavraConvertidaEmCaixa = palavra.toUpperCase()
// console.log(palavraConvertidaEmCaixa)

// função que conta a quantidade de vogais dentro de uma palavra 
// function contarVogais(palavra){
//     let vogais = ["a", "e" , "i", "o", "u"]
//     let contador = 0

//     for(const letra of palavra.toLowerCase()){
//         if(vogais.includes(letra)){
//             contador++
//         }
//     }
//     return contador
// }

// console.log(contarVogais("Javascript"))

function verificarNumero(n){
    if(n>=10 && n<=100 && n % 5 === 0){
        return "Número válido"
    } else {
        return "Número Inválido"
    }
}

console.log(verificarNumero(71))