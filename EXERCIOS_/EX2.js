 function Resultado (LadoA, LadoB, LadoC){
    if (LadoA == LadoB && LadoB == LadoC){
        return 'Equilatero' 
    } else if (LadoA == LadoB || LadoB == LadoC || LadoA == LadoC){
        return 'Isósceles'
    }else {
        return 'Escaleno'
    }
}

console.log(Resultado(2, 2, 2));
console.log(Resultado(2, 3, 3));
console.log(Resultado(2, 3, 4));