// Crie uma variavel que seja um array de objeto que tenha os seguintes pares: chave e valor

// nome da variavel => users

// valores => um objeto com os valores login, password, cursos, sendo cursos um array com dois valores

// renderizar no console a seguinte frase com o primeiro user do array `Meu login é ${login} e , minha senha é ${password} e faço os cursos X e Y`



const users = [
    {
        login: "raphael_viana",
        password: "Raphael3715.",
        cursos: ["Web","Games","Python"]
    },
    {
        login: "João",
        password: "Joao0101",
        cursos: ["Web", "Design", "Games"]
    }
]

console.log(`Meu login é ${users[0].login}, Minha Senha é ${users[0].password} e Faço Os Cursos ${users[0].cursos} `)