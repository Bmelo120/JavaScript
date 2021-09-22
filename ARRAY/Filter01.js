const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'Ipad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de plastico', preco: 18.99 ,fragil: false }
]

console.log(produtos.filter(function(p){
    return true
    // return false 
    // return p.preco > 2500

}))

// Função que exibe os produtos mais caros e fragil 

const caro = produto => produto.preco >= 500
const fragl = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragl))