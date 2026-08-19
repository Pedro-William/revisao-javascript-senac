const tarefas = [
    {id:1, titulo: "Estudar", concluida:false},
    {id:2, titulo: "praticar array", concluida:true},
    {id:3, titulo: "revisar funcao", concluida:false},
];

function adicionarTarefa(lista,novaTarefa){
    return{
        ...tarefas,
        novaTarefa
    }
    function concluirTarefa(lista,id){
        return lista.map((tarefa) =>
        tarefa.id === id ?{...tarefa,concluida:true}: tarefa
    );
    }

    function removerTarefa(lista,id){
        return lista.filter((tarefa) => tarefa.id !== id);
    }

    

}

const comNovaTarefa = adicionarTarefa(tarefas, {
    id: 4,
    titulo: "estudar imutabilidade",
    concluida: false,
});

const comTarefaConcluida = concluirTarefa(comNovaTarefa,2);
const semPrimeiraTarefa = removerTarefa(comTarefaConcluida,2);