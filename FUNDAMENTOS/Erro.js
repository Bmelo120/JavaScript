function tratarErro(erro){
    //throw new Error('VOCE ERROU!')
    //throw 10
   // throw true
   //throw 'mensagem'
   throw {
       nome: erro.nome,
       msg: erro.message,
       date: new Date

   }
}


function imprimirNomeGritado(obj) {
   try {
    console.log(obj.name.toUpperCase() + '!!!!')
    } catch (e) {
      tratarErro(e)
    } finally {
        console.log('final')
    }
}

const obj = { nome: 'Roberto'} //name*
imprimirNomeGritado(obj)