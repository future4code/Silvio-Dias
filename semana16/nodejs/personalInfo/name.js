const name = process.argv[2]

const age = Number(process.argv[3])

if(!name){
    console.log("Nome não inserido")
}

if(!age){
    console.log("Idade não inserida")
}

console.log(`Olá ${name},você tem ${age} anos. Em sete ano você terá ${age + 7}`)

