let numeroTarefa = 0
let tarefaArray = []

function criarTarefa(){
    let novaTarefa = ""
    let dia = ""
    let hora = 0

    //Cria a parte em código da Tarefa
    let inputTarefa = document.getElementById('tarefa').value
    let inputDia = document.getElementById('dias-semana').value
    let inputHora = document.getElementById('horario').value
    
    novaTarefa = inputTarefa
    dia = inputDia
    hora = inputHora

    
    if(novaTarefa !== ""){
    imprimirCalendario(novaTarefa,dia,hora)
    document.getElementById("tarefa").value = ""
    }else{
        alert("Não é possível criar uma tarefa sem nome")
    }
}


function imprimirCalendario(nomeTarefa,diaSemana,horaTarefa){
    

    let calendarioDia = document.getElementById(diaSemana) //Busca o ID para imprimir no calendário 
    let tarefaID = `tarefa${numeroTarefa}` //Cria uma ID única para cada entrada
  

    calendarioDia.innerHTML += `<p id="${tarefaID}" onclick="riscarTarefa('${tarefaID}')" class="tarefaListada"> - ${nomeTarefa} (${horaTarefa}) </p>`

    tarefaArray.push(tarefaID) //Insere 
    numeroTarefa ++ //Aumenta em um o código para criar ID unica
}

function riscarTarefa(id_tarefa){ //Recebe a ID no evento
    document.getElementById(id_tarefa).className = "tarefaRiscada" //insere classe que risca o que foi clicado pela ID
}

function limparTarefas(){
    for(let limpadroTarefa of tarefaArray){
        document.getElementById(limpadroTarefa).innerHTML = ""
    }

    tarefaArray = []
}
