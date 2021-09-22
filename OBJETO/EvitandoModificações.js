// Object.preventExtensions
const produto = Object.preventExtensions({ // Pode modificar/deletar mas não pode adicionar novos atributos
    nome: 'Barbara', preco: 1.99, tag: 'promoção'
})

console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descrição = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

// Objcect.seal 

const pessoa = { nome: 'Juliana', idade: 35}
Object.seal(pessoa) //Nao pode adicionar/excluir mas pode modificar 
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freeze = selado + valores constantes 
// Não pode modificar, deletar ou adicionar 