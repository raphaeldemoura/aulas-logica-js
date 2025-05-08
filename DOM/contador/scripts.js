let contador = 0

const resultado = document.querySelector("#resultado")

const btnIncrementarValor = document.querySelector("#btnIncrementar")

btnIncrementarValor.addEventListener("click", () => {
    contador++
    resultado.textContent = `Contador: ${contador}`
})

btnReduzir.addEventListener("click", () => {
    if (contador > 0) {
        contador--
        resultado.textContent = `Contador: ${contador}`
    }
})