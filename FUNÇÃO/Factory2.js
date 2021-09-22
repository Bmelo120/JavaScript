function criarProduto(nome, preco){
        return {
            nome,
            preco,
            descontro: 0.1
        }
}

console.log(criarProduto('Notebook', 2199,49))
console.log(criarProduto('Fone bluetooh', 499,49))
console.log(criarProduto('Iphone 8 plus', 5199,49))