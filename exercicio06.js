// Crie um array de objetos em que cada objeto é um produto, tendo como chave(nome,preço,descricao). Crie pelo menos 3 produtos.

// Crie uma variavel que irá armazenar o array com os nomes dos produtos

// Crie uma segunda variavel que irá armazenar o array com os preços dos produtos

// Use o laço for ou for of para exibir cada item do array da variavel de nomes no console


const listaDeObjeto = [
    {
        nomeDoProduto: "Sabão",
        precoDoProduto: 20,
        descricaoDoProduto: "Lavar Roupa"

    },
    {
        nomeDoProduto: "Detergente",
        precoDoProduto: 15,
        descricaoDoProduto: "Lavar Vasilha"

    },
    {
        nomeDoProduto: "Refrigerante",
        precoDoProduto: 10,
        descricaoDoProduto: "Para Beber"

    },

]



const nomes = listaDeObjeto.map(objeto => objeto.nomeDoProduto)
const precos = listaDeObjeto.map(objeto => objeto.precoDoProduto)

for(nome of nomes){
    console.log("Nome dos Produtos;", nome)
}

for(preco of precos){
    console.log("Preço do Produto:", preco)
}