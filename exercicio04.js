// crie um programa que verifique o faturamento médio dos 3 trimestre de 2024, sendo:

//1° trimestre => 10.650

// 2° trimestre => 20.00

// 3° trimestre => 35.000

//se for maior que 25.000, o faturamento médio é o esperado. Mas, se o faturamento for menor de 25.000, o faturamento médio está abaixo do esperado

//utilize um objeto para registrar os detalhes. Utilize Desestruturação para facilitar o acesso aos elementos, e fazer os cálculos. Por fim, use um condicional.

const faturamento = {
    faturamentoPrimeiroTri: 10650,
    faturamentoSegundoTri: 20000,
    faturamentoTerceiroTri: 35000
}

const {faturamentoPrimeiroTri,faturamentoSegundoTri,faturamentoTerceiroTri} = faturamento

const mediaFaturada = ((faturamentoPrimeiroTri + faturamentoSegundoTri + faturamentoTerceiroTri)/3).toFixed(2)

if(mediaFaturada >= 25000){
    console.log(`Faturamento foi esperado na média 👍: ${mediaFaturada}`)
} else {
    console.log(`Faturamento foi abaixo do esperado 👎: ${mediaFaturada}`)
}