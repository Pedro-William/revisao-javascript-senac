const aluno = {
    nome: "Mariana",
    idade: 22,
    curso: "Desenvolvimento web",
    notas: [8.5, 7.0, 9.0],
    situacao: "Em analise",

};

const {nome, curso, notas} = aluno
console.log(notas)

const media = notas.reduce((soma,nota) => soma + nota,0)/notas.length;

const alunoAtualizado = {
    ...aluno,
    media,
    situacao: media >= 6 ? 'aprovado':'reprovado'

}

console.log(alunoAtualizado)