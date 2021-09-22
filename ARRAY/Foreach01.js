const aprovados = ['Bia', 'Carlos', 'Aline', 'Bruna']

aprovados.forEach(function(nome, indice) { 
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)