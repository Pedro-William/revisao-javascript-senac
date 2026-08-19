const somar = (a, b) => a + b;
const subtrair = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a,b) => b === 0 ? "erro":a/b 

const calcular = (a,b, operacao) => {
    if (operacao === "soma") return somar(a,b)
    if (operacao === "subtracao") return subtrair(a,b)
    if (operacao === "multiplicacao") return multiplicar(a,b)
    if (operacao === "divisao") return dividir(a,b)

}

