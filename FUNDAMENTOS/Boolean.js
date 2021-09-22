let isAtivo = false 
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) // ! = significa negação | !! = true | ! = false
//ex // 
console.log(!false) // !(não) false é true | Virse é versa 

console.log('Os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ') // ou 'qualquercoisa' tambem é true
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))// ou isAtivo = qualquercoisa é true

console.log('Os falsos...')
console.log(!!0)
console.log(!!'') // sem o espaço
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar...')
console.log(!!('' || null || 0 || ' '))//irá retonar o unico valor verdadeiro

let nome = ''
console.log(nome || 'Desconhecido')// || = ou 
