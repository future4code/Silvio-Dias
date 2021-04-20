// a false
// b false
// c true
// d boolean

//a. undefined
//b. null
//c. 11
//d. [0]
//e (11) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// 9



// VERIFICAR IDADE
const idade =  Number(prompt('Insira a sua idade'))

const idadeAmiga = Number(prompt('Insira a idade de seu(sua) melhor amigo(a)'))

const comparaIdade = idade > idadeAmiga;

document.write(`Sua idade é maior do que a do seu melhor amigo? ${comparaIdade}<br>`)

// IMPAR OU PAR

const par = Number(prompt('Insira um número par'))

const resto = par % 2

document.write(`${par} Dividindo por 2 resta ${resto}<br>`)

//Número par dividido por 2 resta 0

//Número impar divido por 2 resta 1


//LISTA DE TAREFA

const listaDeTarefas = []

const tarefa1 = prompt('Insira a tarefa 1')
listaDeTarefas.push(tarefa1)

const tarefa2 = prompt('Insira a tarefa 2')
listaDeTarefas.push(tarefa2)

const tarefa3 = prompt('Insira a tarefa 3')
listaDeTarefas.push(tarefa3)

const feito = Number(prompt('Remova uma das tarefas que já realizou'))

listaDeTarefas.splice(feito,feito)

document.write(listaDeTarefas + '<br>');

// NOME E EMAIL

var nomeDoUsuario = prompt('Insira seu nome')

var emailDoUsuario  = prompt('Insira seu e-mail')

document.write(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`)




