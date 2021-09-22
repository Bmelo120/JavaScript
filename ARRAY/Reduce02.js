const alunos = [
    { nome: 'Joao', nota: 7.3, bolsista: false},
    { nome: 'Maria', nota: 9.2, bolsista: true},
    { nome: 'Pedro', nota: 9.8, bolsista: false},
    { nome: 'Ana', nota: 8.7, bolsista: true}
]

// Desafio 1: Todos os alunos são bolsistas?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista /* Resumo | v && v -> v| v && f -> f | f && (v ou f) -> f */
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

// Desafio 2 : Algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista // v ou (v e f) -> v | f ou v -> v | f ou f -> f 
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))