const nome = "Pedro"
let nota1 = 7
let nota2 = 5
let nota3 = 5
let nota4 = 5
let resul

resul = (nota1+nota2+nota3+nota4)/4

console.log(`
    Nome: ${nome}
    Nota 1: ${nota1}
    Nota 2: ${nota2}
    Nota 3: ${nota3}
    Nota 4: ${nota4}
    Media: ${resul}`)
    if(resul>=6){
    console.log("    Aprovado")
}else if(resul<5){
    console.log("    Reprovado")
}else{
    console.log("    Recuperação")
}