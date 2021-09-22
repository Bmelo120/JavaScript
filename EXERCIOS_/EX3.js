function Retornar (base, expoente){
  
    let resultado = Math.pow(base, expoente)
    // Ou
    resultado = base ** expoente

    return resultado
}

console.log(Retornar(2, 3))