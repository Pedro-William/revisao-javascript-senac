function somar(a,b){
    return a+b
}

function subtrair(a,b){
    return a-b
}

function multiplicar(a,b){
    return a*b
}

function dividir(a,b){
    if(b === 0){
        return a
    }
    return a / b
}

function calcular(a,b,operacao){
    if (operacao === 'soma'){
        return somar(a,b)
    }else if (operacao === 'subtracao'){
        return subtrair(a,b)

    }else if (operacao === 'multiplicacao'){
        return multiplicar(a,b)

    }else if (operacao === 'divisao'){
        return dividir(a,b)

    }else{
        return "Operação invalida"
    }
}