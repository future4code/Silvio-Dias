const fs = require("fs")

const listaTarefas = JSON.parse(fs.readFileSync("list/data.json"))

if(!process.argv[2]){
    "Nenhuma tarefa enviada"
}

listaTarefas.push(process.argv[2])

fs.writeFileSync("list/data.json", JSON.stringify(listaTarefas,null,'\t'))

console.log("\x1b[34m", listaTarefas)