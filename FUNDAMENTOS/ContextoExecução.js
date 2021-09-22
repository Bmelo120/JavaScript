let a = 3
global.b = 123

this.c = 524
this.d = false 
this.e = 'teste'


console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

// Criando um variavel maluca: sem var e let!

abc = 3 // não faça isso 
console.log(global.abc)

// module.exports = { c: 524, d: false, e: 'teste' }

