const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charCodeAt(3)) // codigo da tabela ncode
console.log(escola.indexOf('3'))

console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log('Escola '.concat(escola).concat("!"))
//ou
console.log('Escola ' + escola + "!")

console.log(escola.replace(3, 'e')) // substituiu o 3 por e
console.log(escola.replace(/\w/g, 'e')) // substitui todas as palavras pela pela e 

console.log('Ana,Maria,Pedro'.split(','))