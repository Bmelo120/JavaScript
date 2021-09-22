function simples (taxa, inicial, tempo){
    return capitalSimples = inicial + (inicial * taxa * tempo)
}

function composta (taxa, inicial, tempo){
    return capitalComposto = inicial * (1 + taxa) ** tempo 
}

console.log(simples(200, 15/100, 5))
console.log(composta(200, 15/100, 5))