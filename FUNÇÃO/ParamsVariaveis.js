function soma() {
    let soma = 0
    for (i in arguments){
        soma += arguments [i]
    }
    return soma
}

console.log(soma())
console.log(soma(2))
console.log(soma(1.1, 2.3, 4.7, 9))
console.log(soma(3, 7, 'Teste'))
console.log(soma('a', 'b', 'c'))