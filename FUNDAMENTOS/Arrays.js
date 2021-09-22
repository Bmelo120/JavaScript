const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])

valores[4] = 10 // add e altera o 10 
console.log(valores)
console.log(valores.length)//Mostra quantidade de elementos

valores.push({id: 3}, false, null, 'teste')//add 
console.log(valores)

console.log(valores.pop())
delete valores [0] // deletou o primeiro elemento
console.log(valores)

console.log(typeof valores)