/* Resumo 
 v e v -> v
 v e f -> f
 f e (v ou f) -> f

 ---------------

 v ou (v e f) -> v
 f ou v -> v
 f ou f -> f 

 -----------

 v xor v -> f
 v xor f -> v
 v xor v -> v
 f xor f -> f

 !v -> f
 !f -> v
 */

 function compras(trabalho1, trabalho2) {
     const comprarSorvete = trabalho1 || trabalho2 // ou
     const comprarTv50 = trabalho1 && trabalho2 // e
     // const comprarTv32 = !!( trabalho1 ^ trabalho2) // bitwise xor
     const comprarTv32 = trabalho1 != trabalho2 // xor
     const manterSaudavel = !comprarSorvete // operador unario

     return{ comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }

    }

    console.log(compras(true, true))
    console.log(compras(true, false))
    console.log(compras(false, true))
    console.log(compras(false, false))