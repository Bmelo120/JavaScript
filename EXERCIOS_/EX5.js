const num1 = 0.1
const num2 = 0.2 

const total = num1 + num2

console.log(`R$ ${total.toFixed(2).replace(".", ",")}`)

//Ou

function formatarValorDecimal(valorDecimal) {
    valorEmReais = `R$ ${valorDecimal.toFixed(2).toString().replace(".", ",")}`
    console.log(valorEmReais)
}

formatarValorDecimal(0.1 + 0.2)