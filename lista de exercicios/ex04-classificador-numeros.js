let num = 2

if(num===0){
    console.log("o numero escolhido é zero")
}else{
    const sinal = num > 0 ? 'positivo' : 'negativo'
    const tipo = num % 2 === 0 ? 'par' : 'impar'

    console.log(`O numero escolhido é ${sinal} e ${tipo}`)
}

