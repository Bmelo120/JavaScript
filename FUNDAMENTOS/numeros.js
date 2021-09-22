const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.541
const avaliacao2 = 6.254

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso2 + peso1)

console.log(media.toFixed(2)) // limita o numero casa decimais e add o numero de casas que deseja mostrar
console.log(media.toString(2)) /* retorna em binario */ 
console.log(typeof media ) // tipo 
console.log(typeof Number) // função


